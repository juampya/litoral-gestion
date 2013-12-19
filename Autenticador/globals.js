/**
 * @properties={typeid:24,uuid:"1D6D651C-419D-4E87-A60A-813AFE4BBA76"}
* @param {String} usuario
 * @param {Object} password
 * @param {Object} saas
 * @AllowToRunInFind
 */
function login(usuario,password,saas) {
	
/** Esta funcion devuelve un array
 * [0]: 0:Error 1:OK
 * [1]: Si es error, string del error, sino id del usuario
 * [2]: id_empresa
 * [3]: rowBGEven
 * [4]: rowBGOdd
 * [5]: Administrador SAAS
 * 
 * si saas == 1 -> us_admin == 1
 * 
 */
	var modulo = 0
	if (saas == '1') modulo = 0
	else modulo = 1
	var login_error_msg = ''
	var usr = new Array()

	if (!usuario) {
		login_error_msg = i18n.getI18NMessage('authenticator.faltaUsuario')
		application.output(login_error_msg, LOGGINGLEVEL.DEBUG)
		LogLogin(0, usuario, password, login_error_msg, modulo, 0)
		usr[0]=0
		usr[1]=login_error_msg
		return usr
	}
	
	if (!password) {
		login_error_msg = i18n.getI18NMessage('authenticator.faltaPassword')
		application.output(login_error_msg, LOGGINGLEVEL.DEBUG)
		LogLogin(0, usuario, password, login_error_msg, modulo, 0)
		usr[0]=0
		usr[1]=login_error_msg
		return usr
	}

	/** @type {JSFoundset<db:/Sistemas/usuarios>} */
	var fs_usuario = databaseManager.getFoundSet('Sistemas','usuarios')
	fs_usuario.find()
	fs_usuario.usu_login = usuario
	var cantidad = fs_usuario.search()
	if (cantidad == 0) {
		login_error_msg = i18n.getI18NMessage('authenticator.usuarioInexistente')
		application.output(login_error_msg, LOGGINGLEVEL.DEBUG)
		LogLogin(0, usuario, password, login_error_msg, modulo, 0)
		usr[0]=0
		usr[1]=login_error_msg
		return usr
	}
	
	if (fs_usuario.usu_estado != 1) {
		login_error_msg =i18n.getI18NMessage('authenticator.sinPermisoDeAcceso')
		application.output(login_error_msg, LOGGINGLEVEL.DEBUG)
		LogLogin(fs_usuario.usu_id, usuario, password, login_error_msg, modulo, fs_usuario.emp_id)
		usr[0]=0
		usr[1]=login_error_msg
		return usr
	}

	if (fs_usuario.usu_password != password) {
		login_error_msg = i18n.getI18NMessage('authenticator.passwordInvalido')
		application.output(login_error_msg, LOGGINGLEVEL.DEBUG)
		LogLogin(fs_usuario.usu_id, usuario, password, login_error_msg, modulo, fs_usuario.emp_id)
		usr[0]=0
		usr[1]=login_error_msg
		return usr
	}

	if (saas == 1) {
		if (fs_usuario.usu_nivel_acceso != 99) {
			login_error_msg = i18n.getI18NMessage('authenticator.noEsAdministradorSaas')
			application.output(login_error_msg, LOGGINGLEVEL.DEBUG)
			LogLogin(fs_usuario.usu_id, usuario, password, login_error_msg, modulo, fs_usuario.emp_id)
			usr[0]=0
			usr[1]=login_error_msg
			return usr
		}
	}
	
	var grupos = ['Administrators']
	security.login(usuario, fs_usuario.usu_id, grupos)

	LogLogin(fs_usuario.usu_id, usuario, '', 'OK', modulo, fs_usuario.emp_id)
	usr[0]=1
	usr[1]=fs_usuario.usu_id
	usr[2]=fs_usuario.emp_id
	//usr[3]=fs_usuario.usu_row_bg_even
	//usr[4]=fs_usuario.us_row_bg_odd
	usr[3]=fs_usuario.usu_nivel_acceso
	usr[4]=fs_usuario.usu_nombre
	return usr
}

/**
 * @properties={typeid:24,uuid:"5F3FE66F-3CDE-4D71-AB01-8B55E4780C7A"}
 */
function LogLogin(usuario_id, usuario, password, mensaje, modulo, empresa){

	/** @type {JSFoundset<db:/sistemas/sys_use>} */
	var fs_dev = databaseManager.getFoundSet('sistemas', 'sys_use')
	fs_dev.newRecord()
 	fs_dev.sys_use_login = usuario
	fs_dev.sys_use_ip = application.getIPAddress()
	fs_dev.modulo_id = modulo
	fs_dev.usu_id = usuario_id 
	fs_dev.sys_use_fec_ing = new Date()
	fs_dev.sys_use_bad_password = password
	fs_dev.sys_use_observa = mensaje
	fs_dev.emp_id = empresa
	databaseManager.saveData(fs_dev)
}

/**
 * @AllowToRunInFind
 * 
 * // TODO generated, please specify type and doc for the params
 * @param {Object} empresa_id
 *
 * @properties={typeid:24,uuid:"0EDAEE19-2C7B-4250-8FE9-22F111763430"}
 */
function empresa(empresa_id) 
{
	
	/** @type {JSFoundset<db:/Sistemas/empresas>} */
	var fs_empresa = databaseManager.getFoundSet('Sistemas','empresas')
	fs_empresa.find()
	fs_empresa.emp_id = empresa_id
	var cantidad = fs_empresa.search()
	
	var datosEmpresa = new Array()
	if (cantidad == 0) {
		datosEmpresa[0] = 0		
		datosEmpresa[1] = null
		datosEmpresa[2] = null
		datosEmpresa[3] = null
		datosEmpresa[4] = null
	} else {
		datosEmpresa[0] = 1
		datosEmpresa[1] = fs_empresa.emp_nombre
		datosEmpresa[2] = fs_empresa.emp_frase
		datosEmpresa[3] = fs_empresa.emp_logotipo1
		datosEmpresa[4] = fs_empresa.emp_logotipo2
	}
	return datosEmpresa
}
