/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"03A87D63-EDA7-4A70-9BE3-22C0345B5F07"}
 */
var vg_cco = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4A0C69CC-29E8-44A8-87B3-B3B1EEFD946E"}
 */
var vg_cc = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4A750794-6ECC-452B-B7FA-7F593C236E9E",variableType:4}
 */
var vg_foa_banco = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"32A21E44-625E-4B25-BD09-D5091007BB2B"}
 */
var vg_fec_hasta = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"132E6685-539B-498A-81E4-32297CD2D47F"}
 */
var vg_fec_desde = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F2A4EF61-9DB1-45A1-B1CF-E00C678D1FA9"}
 */
var vg_formulario_anterior = null;

/**
 * @type {Array<plugins.mail.Attachment>}
 * @properties={typeid:35,uuid:"4884E3C0-5A2B-462A-8B0E-4BF9226EF9CA",variableType:-4}
 */
var vg_adjuntos = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4A2D3AD9-FC83-44DB-958F-500829E86068"}
 */
var vg_cuerpo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B54052A2-7A7C-4166-B075-11EA3F3EA71A"}
 */
var vg_asunto = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7FBBC56C-51ED-4427-A860-8DE4A6F094BC"}
 */
var vg_destinatarios = null;

/**
 * @properties={typeid:35,uuid:"A4EB65EA-3B7A-469B-B706-CAF8DE1D74FB",variableType:-4}
 */
var vg_fs_menu = null;

/**
 * @properties={typeid:35,uuid:"895FBF89-B0D7-46E9-93AE-9D4DFCAF6259",variableType:-4}
 */
var vg_fs_submenu = null;

/**
 * @properties={typeid:35,uuid:"5C1CD375-F16E-4732-B69D-C0C294925D3A",variableType:-4}
 */
var vg_auditoria_campo = null;

/**
 * @properties={typeid:35,uuid:"057E260C-0556-42AE-8B50-A0780AE0603E",variableType:-4}
 */
var vg_auditoria_tabla = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"409F787A-3161-440D-A852-C592BCD0EA01",variableType:4}
 */
var vg_auditoria_pk = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D3E6AE60-06DD-4928-A207-1E2E576F7EFD"}
 */
var vg_mensaje_de_error = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"67352030-9DC7-4372-A91A-08F0E378ECD4",variableType:4}
 */
var vg_sp_tipo_movimiento = null;

/**
 * @properties={typeid:35,uuid:"BE57D497-7C39-44E2-8311-94219E709461",variableType:-4}
 */
var vg_archivo_imagen = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FEA39F35-EEF2-441A-809C-30E630F28332",variableType:4}
 */
var vg_archivo_funcion_codigo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5AC9AE6F-F1FA-4D2C-B85B-107620C5ED0D",variableType:4}
 */
var vg_archivo_tabla_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"221853E5-F884-441B-9078-0C9C88C65199",variableType:4}
 */
var vg_archivo_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9BDE2BD1-F747-4F7C-A736-3A2FC1575204"}
 */
var vg_archivo_nombre = null;

/**
 * @properties={typeid:24,uuid:"784CD050-3061-4E12-8F62-633D4F888D58"}
 */
function InicializaParametros(){
	
	databaseManager.setAutoSave(false)

	application.setNumpadEnterAsFocusNextEnabled(true)
	
	scopes.globals.mx_usuario_id = security.getUserUID()
	scopes.globals.mx_empresa_id = ag_usuariovigente.emp_id
	
	//Si el usuario es Juampy o German saco los filtros por empresa.
	if(scopes.globals.mx_usuario_id != 1 && scopes.globals.mx_usuario_id != 2)
	{
		databaseManager.addTableFilterParam('sistemas',null,'emp_id','=',scopes.globals.mx_empresa_id)
	}
	
	application.addClientInfo('Usuario: '+ ag_usuariovigente.usu_id +' - ' + ag_usuariovigente.usu_nombre)
	application.addClientInfo('Empresa: '+ scopes.globals.mx_empresa_id   +' - ' + ag_empresavigente.emp_nombre)
}

/**
 * @properties={typeid:24,uuid:"885DA5E5-A6F0-4F01-AA0C-1FE468DDBA38"}
 */
function Cerrar_Solucion() 
{
	databaseManager.revertEditedRecords()
	
	if (application.isInDeveloper()) {
		application.closeSolution()
	} else {
		application.closeSolution('Sistemas','InicializaArgento')
	}
}

/**
 * @properties={typeid:24,uuid:"0784A58A-268E-4646-97DC-C14751C4EBB7"}
 */
function Ir_a_Home() {
	databaseManager.revertEditedRecords()
	application.showForm('InicioSolucion')
}

/**
 * 
 * @param usuario
 * @param titulo
 * @param mensaje
 * @param icono
 * @param formulario
 * @param btn1
 * @param metodo1
 * @param btn2
 * @param metodo2
 * @param btn3
 * @param metodo3
 * @param btn4
 * @param metodo4
 *
 * @properties={typeid:24,uuid:"FFB80B32-1F55-4696-9C33-F09EFF12E6F9"}
 */
function VentanaGenerica(usuario,titulo,mensaje,icono,formulario,btn1,metodo1,btn2,metodo2,btn3,metodo3,btn4,metodo4) 
{
	
	if(!btn1) btn1 = 'OK'
	if(!btn2) btn2 = null
	if(!btn3) btn3 = null
	if(!btn4) btn4 = null
			
	//setup buttons
	forms.ventana_generica.setear_botones(btn1, btn2, btn3, btn4)
	
	if(!titulo || titulo == undefined) titulo = ''
		if(!mensaje || mensaje == undefined) mensaje = ''
		forms.ventana_generica.hide_allIcons();
		forms.ventana_generica.vg_usuario = usuario
		forms.ventana_generica.vg_titulo = titulo
		forms.ventana_generica.vg_mensaje = mensaje
		forms.ventana_generica.vg_icono = icono
		forms.ventana_generica.vg_form=formulario
		forms.ventana_generica.vg_boton1=btn1
		forms.ventana_generica.vg_boton2=btn2
		forms.ventana_generica.vg_boton3=btn3
		forms.ventana_generica.vg_boton4=btn4
		forms.ventana_generica.vg_metodo1=metodo1
		forms.ventana_generica.vg_metodo2=metodo2
		forms.ventana_generica.vg_metodo3=metodo3
		forms.ventana_generica.vg_metodo4=metodo4
		
		switch( icono )
		{
			case 'error': forms.ventana_generica.show_iconError(); break;
			case 'info': forms.ventana_generica.show_iconInfo(); break;
			case 'question': forms.ventana_generica.show_iconQuestion(); break;
			case 'warning': forms.ventana_generica.show_iconWarning(); break;
			case 'forbidden': forms.ventana_generica.show_iconForbidden(); break;
			default: forms.ventana_generica.show_iconInfo();
		}
		
		var win = application.createWindow('ventanaGenerica', JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
        win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= titulo
		win.show(forms.ventana_generica);		

	}

/**
 * @AllowToRunInFind
 * @properties={typeid:24,uuid:"25370AD7-6902-4805-9FDD-A4F63BD68195"}
 */
function CargarMenu()
{
	SacarMenu()
	
	var menubar = plugins.window.getMenuBar()
		menubar.setVisible(true)
		
	/** @type {JSFoundset<db:/Sistemas/menus>}*/
	var fs_menus = databaseManager.getFoundSet('Sistemas','menus')	
		fs_menus.find()
		fs_menus.modulo_id = scopes.globals.mx_modulo_id
		fs_menus.menu_principal = 1
		fs_menus.search()
		fs_menus.sort('menu_orden asc')
		
	for(var i=1; i<=fs_menus.getSize();i++)
	{
		var record = fs_menus.getRecord(i)
		/** @type {plugins.window.Menu} */
		var titulo = menubar.addMenu()
			titulo.text = record.menu_titulo
			titulo.setEnabled(BuscaPermisos(record.menu_id))
			titulo.setMnemonic(record.menu_teclas_rapidas)
			
		/** @type {JSFoundset<db:/Sistemas/menus>}*/
		var fs_submenu = databaseManager.getFoundSet('Sistemas','menus')	
			fs_submenu.find()
			fs_submenu.menu_dependencia = record.menu_id
			fs_submenu.search()	
			fs_submenu.sort('menu_orden asc')
			
		if(fs_submenu.getSize()>0)
		{
			for(var j=1; j<=fs_submenu.getSize();j++)
			{
				var record_submenu = fs_submenu.getRecord(j)
				if(record_submenu.menu_principal==3)
				{
					var sub_titulo = titulo.addMenu(record_submenu.menu_titulo)
						sub_titulo.setEnabled(BuscaPermisos(record_submenu.menu_id))
						sub_titulo.setMnemonic(record_submenu.menu_teclas_rapidas)
						sub_titulo.setIcon(record_submenu.menu_icon)
						
					/** @type {JSFoundset<db:/Sistemas/menus>}*/
					var fs_submenu1 = databaseManager.getFoundSet('Sistemas','menus')	
						fs_submenu1.find()
						fs_submenu1.menu_dependencia = record_submenu.menu_id
						fs_submenu1.search()
						fs_submenu1.sort('menu_orden asc')
					for(var k=1; k<=fs_submenu1.getSize();k++)
					{
						var record_submenu1 = fs_submenu1.getRecord(k)
						if(record_submenu1.menu_principal==3)
						{
							var sub_titulo1 = sub_titulo.addMenu(record_submenu1.menu_titulo)
								sub_titulo1.setEnabled(BuscaPermisos(record_submenu1.menu_id))
								sub_titulo1.setMnemonic(record_submenu1.menu_teclas_rapidas)
								sub_titulo1.setIcon(record_submenu1.menu_icon)
								
							/** @type {JSFoundset<db:/Sistemas/menus>}*/
							var fs_submenu2 = databaseManager.getFoundSet('Sistemas','menus')	
								fs_submenu2.find()
								fs_submenu2.menu_dependencia = record_submenu1.menu_id
								fs_submenu2.search()
								fs_submenu2.sort('menu_orden asc')
							for(var m=1; m<=fs_submenu2.getSize();m++)
							{
								var record_submenu2 = fs_submenu2.getRecord(m)
									
									sub_titulo1.addMenuItem(record_submenu2.menu_titulo,forms[globals.mx_modulo_inicio][record_submenu2.menu_funcion],record_submenu2.menu_icon,record_submenu2.menu_teclas_rapidas,BuscaPermisos(record_submenu2.menu_id))
							}
						}
						else
						{
							sub_titulo.addMenuItem(record_submenu1.menu_titulo,forms[globals.mx_modulo_inicio][record_submenu1.menu_funcion],record_submenu1.menu_icon,record_submenu1.menu_teclas_rapidas,BuscaPermisos(record_submenu1.menu_id))
						}
					}
				}	
				else
				{
					titulo.addMenuItem(record_submenu.menu_titulo,forms[globals.mx_modulo_inicio][record_submenu.menu_funcion],record_submenu.menu_icon,record_submenu.menu_teclas_rapidas,BuscaPermisos(record_submenu.menu_id))
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"B0935BAC-6271-4A60-A0AD-71FCF09ECACD"}
 * @AllowToRunInFind
 */
function CargarMenuWeb()
{
	var menu_principal = new Array()
	var name = ''
	for(var k=0; k<forms[globals.mx_modulo_inicio].elements.allnames.length;k++)
	{
		var name_btn = forms[globals.mx_modulo_inicio].elements.allnames[k];
		name = name_btn.substr(0,8)
		if(name=='btn_menu')
		{
			menu_principal.push(name_btn)
		}
	}	
	
	/** @type {JSFoundset<db:/Sistemas/menus>}*/
	var fs_menus = databaseManager.getFoundSet('Sistemas','menus')	
		fs_menus.find()
		fs_menus.modulo_id = scopes.globals.mx_modulo_id
		fs_menus.menu_principal = 1
		fs_menus.search()
		fs_menus.sort('menu_orden asc')
		
	for(var i=1; i<=fs_menus.getSize();i++)
	{
		var record = fs_menus.getRecord(i)
		 forms[globals.mx_modulo_inicio].elements[menu_principal[i-1]].text=record.menu_titulo
		 forms[globals.mx_modulo_inicio].elements[menu_principal[i-1]].fgcolor='#ffffff'
		 forms[globals.mx_modulo_inicio].elements[menu_principal[i-1]].font= 'Microsoft Sans Serif,1,11'
	}	
	
	return fs_menus
}

/**
 * @properties={typeid:24,uuid:"95D7AE03-95E4-4897-914C-D59835529EBD"}
 * @AllowToRunInFind
 */
function CargarSubMenuWeb(p_orden, p_coorx, p_coory)
{
	var vl_submenu = new Array()
	var name = ''

	for(var k=0; k<forms[globals.mx_modulo_inicio].elements.allnames.length;k++)
	{
		var name_btn = forms[globals.mx_modulo_inicio].elements.allnames[k];
		name = name_btn.substr(0,11)
		if(name=='btn_submenu')
		{
			vl_submenu.push(name_btn)
		}
	}
	
	for(var j=0; j<vl_submenu.length;j++)
	{
		forms[globals.mx_modulo_inicio].elements[vl_submenu[j]].text=null
		forms[globals.mx_modulo_inicio].elements[vl_submenu[j]].visible = false
	}
	
	/** @type {JSFoundset<db:/Sistemas/menus>}*/
	var fs_menus = databaseManager.getFoundSet('Sistemas','menus')	
		fs_menus.find()
		fs_menus.modulo_id = scopes.globals.mx_modulo_id
		fs_menus.menu_principal = 1
		fs_menus.menu_orden = p_orden
		fs_menus.search()
		fs_menus.sort('menu_orden asc')
	
	/** @type {JSFoundset<db:/Sistemas/menus>}*/
	var fs_submenu = databaseManager.getFoundSet('Sistemas','menus')	
		fs_submenu.find()
		fs_submenu.menu_dependencia = fs_menus.menu_id
		fs_submenu.search()	
		fs_submenu.sort('menu_orden asc')
	
//	if(fs_submenu.getSize()>0)
//	{
//		for(var i=1; i<=fs_submenu.getSize();i++)
//		{
//			var record_submenu = fs_submenu.getRecord(i)
//			if(record_submenu.menu_titulo!="Salir")
//			{
//				forms[globals.mx_modulo_inicio].elements[vl_submenu[i-1]].text=record_submenu.menu_titulo
//				forms[globals.mx_modulo_inicio].elements[vl_submenu[i-1]].fgcolor='#ffffff'
//				forms[globals.mx_modulo_inicio].elements[vl_submenu[i-1]].font= 'Microsoft Sans Serif,1,11'
//				forms[globals.mx_modulo_inicio].elements[vl_submenu[i-1]].visible  = true
//			}	
//		}
//	}
	
	// alternatively create a popup menu
	var menu = plugins.window.createPopupMenu();
	
	if(fs_submenu.getSize()>0)
	{
		for(var i=1; i<=fs_submenu.getSize();i++)
		{
			var record_submenu = fs_submenu.getRecord(i)
			if(record_submenu.menu_titulo!="Salir")
			{
				menu.addMenuItem(record_submenu.menu_titulo,forms[globals.mx_modulo_inicio][record_submenu.menu_funcion],record_submenu.menu_icon,null,BuscaPermisos(record_submenu.menu_id));
			}
		}
	}		
	menu.show(p_coorx,p_coory)
	
	//return fs_submenu
}

/**
 * @properties={typeid:24,uuid:"2BEAB674-25C0-49D7-8F8B-6D7882CD4419"}
 */
function SacarMenu()
{
	plugins.window.getMenuBar().removeAllMenus()
	plugins.window.setToolBarAreaVisible(false)	
}

/**
 * @param {Number} p_menu_id
 * @return {Boolean} 
 * @properties={typeid:24,uuid:"CE895508-EBFE-428E-97EB-68115C30674A"}
 * @AllowToRunInFind
 */
function BuscaPermisos(p_menu_id)
{
	/** @type {JSFoundset<db:/Sistemas/accesos>}*/
	var fs_accesos = databaseManager.getFoundSet('Sistemas','accesos')	
		fs_accesos.find()
		fs_accesos.menu_id = p_menu_id
		fs_accesos.modulo_id = scopes.globals.mx_modulo_id
		fs_accesos.usu_id = scopes.globals.mx_usuario_id
		fs_accesos.search()
	
	if(fs_accesos.getSize()>0)
	{
		if(fs_accesos.acc_si_no != null)
		{
			if(fs_accesos.acc_si_no == 1)
			{
				return true
			}
			else
			{
				return false
			}
		}
		else
		{
			return false
		}
	}
	else
	{
		
		fs_accesos.newRecord()
		fs_accesos.modulo_id = scopes.globals.mx_modulo_id
		fs_accesos.menu_id = p_menu_id
		fs_accesos.usu_id = scopes.globals.mx_usuario_id
		
		
		if(ag_usuariovigente.usu_nivel_acceso==99)
		{
			fs_accesos.acc_si_no = 1
			databaseManager.saveData(fs_accesos)
			return true
		}
		else
		{
			fs_accesos.acc_si_no = 0
			databaseManager.saveData(fs_accesos)
			return false
		}
	}
}

/**
 * Devuelve un numero aleatorio de 8 digitos
 * @return {Number}
 * @properties={typeid:24,uuid:"D8D3804E-4B75-4492-B8BF-B37B32A66AB3"}
 */
function tmpRandomNumber() 
{
	var rnd = Math.random().toFixed(8)
	var nro = utils.stringToNumber(rnd.substr(2))
	var resultado = Math.abs(nro)
	return resultado
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSRecord} record
 *
 * @properties={typeid:24,uuid:"B3C9C787-0A74-453A-880C-04212354166C"}
 */
function LG_Auditoria(record) 
{
	/**@type {JSFoundset<db:/sistemas/lg_auditoria>}*/
	var fs_auditoria = databaseManager.getFoundSet('sistemas','lg_auditoria')
	
	var tabla = record.foundset.getDataSource().split('/')[2]
	var pk_valor_de_record = record.getPKs()[0]
	var usu_modif = scopes.globals.mx_usuario_id
	var fec_modif = application.getServerTimeStamp()
	
	/**@type {JSDataSet}*/
	var dataset = record.getChangedData()
	
	for (var i = 1; i <= dataset.getMaxRowIndex(); i++) 
	{
		var campo 		= dataset.getValue(i,1)
		var valor_viejo = dataset.getValue(i,2)
		var valor_nuevo = dataset.getValue(i,3)
		if(tabla != "mat_matriculados" && campo != "calc_cuotas_adeud")
		{
			fs_auditoria.newRecord()
			fs_auditoria.audit_tabla 		  = tabla
			fs_auditoria.audit_pk_valor 	  = pk_valor_de_record 
			fs_auditoria.audit_usuario 		  = usu_modif
			fs_auditoria.audit_fecha 		  = fec_modif 
			fs_auditoria.audit_valor_anterior = valor_viejo 
			fs_auditoria.audit_valor_nuevo 	  = valor_nuevo 
			fs_auditoria.audit_campo 		  = campo
		}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param filename
 *
 * @properties={typeid:24,uuid:"B82124BA-0FEB-4B55-BC32-33DCD07D6834"}
 */
function archivoAdjuntoAdjuntar(filename) 
{
	scopes.globals.vg_archivo_id = 0
	
	if (!filename) {
		return
	}
	
	/**@type {plugins.file.JSFile}*/
    var datos = filename[0]
    var vl_adj_filename 	= datos.getName()
    var normalizedFileName 	= "";
    normalizedFileName 		= utils.stringReplace(datos.getPath(),'\\','/')    //make windows path like unix path
    var vl_adj_filepath 	= normalizedFileName
    var a 					= vl_adj_filename.lastIndexOf(".")
    var vl_adj_extension 	= vl_adj_filename.substring(a+1)
    var vl_adj_size 		= datos.size()
    var vl_adj_adjunto 		= plugins.file.readFile(datos)
 
	if (globals.vg_archivo_nombre == null || globals.vg_archivo_nombre == '') {
		globals.vg_archivo_nombre = 'Imagen Principal.'
	} 
    var vl_adj_descripcion	= globals.vg_archivo_nombre
	
	 /** @type {JSFoundset<db:/Sistemas/lg_adjuntos>}*/
	var fs_adj = databaseManager.getFoundSet('Sistemas','lg_adjuntos')
	fs_adj.newRecord()
	fs_adj.adj_tabla_id 	= globals.vg_archivo_tabla_id
	fs_adj.func_codigo	 	= globals.vg_archivo_funcion_codigo
	fs_adj.adj_descripcion	= vl_adj_descripcion
	fs_adj.adj_adjunto 		= vl_adj_adjunto
	fs_adj.adj_filename 	= vl_adj_filename
	fs_adj.adj_path 		= vl_adj_filepath
	fs_adj.adj_size 		= vl_adj_size
	fs_adj.adj_extension 	= vl_adj_extension
	databaseManager.saveData(fs_adj)
	
	// Seteo de variables globales.
	globals.vg_archivo_id 		= fs_adj.adj_id
	globals.vg_archivo_imagen 	= vl_adj_adjunto
}

/**
 * TODO generated, please specify type and doc for the params
 * @param imagen_id
 *
 * @properties={typeid:24,uuid:"D1527F57-2683-4E85-8839-DFA318A9A25B"}
 */
function archivoAdjuntoMostrar(imagen_id) 
{
	 /** @type {JSFoundset<db:/Sistemas/lg_adjuntos>}*/
	var fs_adjunto = databaseManager.getFoundSet('Sistemas','lg_adjuntos')
	fs_adjunto.loadRecords(imagen_id)

	var vOS = application.getOSName();

	if(utils.stringPatternCount(vOS, 'Windows') == 1){
		if (!plugins.file.createFolder('c:/tmp')) {
			application.output("Carpeta ya creada.");
		}
	}

	var tempfilename='/tmp/' + fs_adjunto.adj_filename
	plugins.file.writeFile(tempfilename,fs_adjunto.adj_adjunto)
	
	if(utils.stringPatternCount(vOS, 'Windows') == 1){
   		application.executeProgramInBackground( 'rundll32', ['url.dll,FileProtocolHandler', 'c:/'+tempfilename]);
	}
	else if(utils.stringPatternCount(vOS, 'FreeBSD') == 1 || utils.stringPatternCount(vOS, 'Linux') == 1){
   		application.executeProgramInBackground('mozilla', [tempfilename]);
	}
	else if(utils.stringPatternCount(vOS, 'Mac') == 1){
   		application.executeProgramInBackground('open', [tempfilename]);
	}	
}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param lnk_funcion_email
 * @param lnk_asunto
 * @param lnk_cuerpo
 *
 * @properties={typeid:24,uuid:"E7AF089D-8485-43B5-AE86-B443FF743213"}
 */
function enviarEmailPorFunciones(lnk_funcion_email, lnk_asunto, lnk_cuerpo) 
{
	var smpt 		  = 'mail.smtp.host=' + scopes.globals.ag_empresavigente.emp_smtp_host
	var smtp_port 	  = 'mail.smtp.port=' + scopes.globals.ag_empresavigente.emp_smtp_port
	var smtp_auth 	  = 'mail.smtp.auth=' + scopes.globals.ag_empresavigente.emp_smtp_auth
	var smtp_user 	  = 'mail.smtp.username=' + scopes.globals.ag_empresavigente.emp_smtp_username
	var smtp_pasw 	  = 'mail.smtp.password=' + scopes.globals.ag_empresavigente.emp_smtp_password
	var smtp_starttls = 'mail.smtp.starttls.enable=' + scopes.globals.ag_empresavigente.emp_smtp_starttls
	var authorization = new Array(smpt, smtp_port,smtp_auth,smtp_user,smtp_pasw,smtp_starttls)
	
	/** @type {JSFoundset<db:/sistemas/lg_funciones>}*/
	var fs_funciones = databaseManager.getFoundSet('sistemas', 'lg_funciones')
	fs_funciones.find()
	fs_funciones.func_codigo = lnk_funcion_email
	fs_funciones.search()
	if (fs_funciones.getSize() < 1) {
		fs_funciones.find()
		fs_funciones.func_codigo = 0
		fs_funciones.search()
		lnk_cuerpo = 'Funcion: ' + lnk_funcion_email + '\nAsunto: ' + lnk_asunto + '\nCuerpo: ' + lnk_cuerpo
		lnk_asunto = 'Funcionalidad de correo inexistente.'
	}
	
	var destinatarios 	= ''
	var remitente = ''
	
//	if (utils.hasRecords(fs_funciones.md_home_funciones_to_adn_email_remitentes)) {
//		if (fs_funciones.md_home_funciones_to_adn_email_remitentes.email_remitente == null) {
//			remitente 		= fs_funciones.home_funcion_email_responsable
//		} else {
//			remitente 		= fs_funciones.md_home_funciones_to_adn_email_remitentes.email_remitente	
//		}
//	} else {
//		remitente 		= fs_funciones.home_funcion_email_responsable
//	}
	
	remitente 	= fs_funciones.func_email_responsable
	var subject	= 'Litoral Gestion Mail: ' + lnk_asunto
	var cuerpo	= lnk_cuerpo
	
	if (utils.hasRecords(fs_funciones.lg_funciones_to_lg_funciones_email_destinatarios)) {
		for(var i = 1; i <= fs_funciones.lg_funciones_to_lg_funciones_email_destinatarios.getSize(); i++)
		{
			var rec_email = fs_funciones.lg_funciones_to_lg_funciones_email_destinatarios.getRecord(i)

			if (i == fs_funciones.lg_funciones_to_lg_funciones_email_destinatarios.getSize()) {
				destinatarios= destinatarios + rec_email.email_destinatario
			} else {
				destinatarios= destinatarios + rec_email.email_destinatario + ', '
			}
		}
	}
	
	if(destinatarios != '')
	{
		plugins.mail.sendMail(destinatarios, remitente, subject, cuerpo, null, null, null,authorization)  	
	}   			
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {String} cuit
 *
 * @properties={typeid:24,uuid:"B7D398D2-A2BF-4A53-9BB1-89121416DB37"}
 */
function ValidarCuit(cuit)
{
	if(cuit.length !=11)
	{
		//return false
	}
	
	var acumulado = 0
	var digitos   = cuit.split("")
	var digito	  = digitos.pop()
	
	for(var i = 0; i < digitos.length; i++)
	{
		acumulado += digitos[9-i]*(2+(i%6))
	}
	
	var verif = 11 - (acumulado % 11)
	if(verif == 11)
	{
		digito = 0
	}
	else
	{
		if(verif==10)
		{
			digito = 9
		}
	}
	
	return digito
}
