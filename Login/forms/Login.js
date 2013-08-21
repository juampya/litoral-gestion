/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7189CCD4-F7F7-4064-84C0-57FC23947C0C"}
 */
var vl_copyrigth = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CCA81CDD-8361-49FD-9943-D17801694DAB"}
 */
var vl_emp_frase = null;

/**
 * @type {JSMedia}
 * @properties={typeid:35,uuid:"64694BD7-51EB-443A-B900-132BAE555DED",variableType:-4}
 */
var vl_emp_logo = null;

/**
 * @type {JSMedia}
 * @properties={typeid:35,uuid:"5FA06B88-9AD9-4814-8F34-18961A15566E",variableType:-4}
 */
var vl_emp_marca = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ADE1A0EA-3C87-4D38-94D6-B02428FD4C07"}
 */
var vl_emp_nombre = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C8D78B88-2DDF-445F-AFA3-B4068567466F"}
 */
var vl_logon_error_msg = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DED3C8EB-6812-47C0-8193-30711F69F3E9"}
 */
var vl_password = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"36E4A7EE-9228-43D7-8BEA-8CB631B3D26D"}
 */
var vl_solucion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"83371178-1764-401C-8C05-30EB10B40577"}
 */
var vl_usuario = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E15D1EC6-67B1-4168-A072-A27513D187DA"}
 */
function onLoad(event) {
	if (application.getApplicationType() != 5){
//                plugins.window.setMenuVisible(false)
                plugins.window.getMenuBar().setVisible(false)
                plugins.window.setStatusBarVisible(false)
				plugins.window.setToolBarAreaVisible(false)

//                plugins.window.setToolBarVisible(false)
	}
    var solutionName = application.getSolutionName();
    var release = application.getSolutionRelease();
    vl_solucion = 'Solución ' + solutionName + ' Release Servoy ' + release + '.'
    vl_copyrigth = 'Litoral Software S.R.L. 2013'
    vl_logon_error_msg = ''

    application.setNumpadEnterAsFocusNextEnabled(true)
    databaseManager.setAutoSave(false)
    
    globals.mx_empresa_id = 1

    CargarDatosEmpresa(globals.mx_empresa_id)
    
    CentrarCampos()
    controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"7184518E-A0A3-4638-8BFB-90D74951096E"}
 * @AllowToRunInFind
 */
function CargarDatosEmpresa(p_empresa) {
	var datosEmpresa = new Array()
	datosEmpresa = security.authenticate('Autenticador', 'empresa', [p_empresa])
	//datosEmpresa = security.authenticate('Authenticator', 'empresa', [p_empresa])
	
	if (datosEmpresa[0] == 0) {
		plugins.dialogs.showInfoDialog('Litoral Software S.R.L.','No existe la empresa '+p_empresa,'OK')
		application.exit()
	}
	else
	{
		vl_emp_nombre = datosEmpresa[1]
		vl_emp_frase = datosEmpresa[2]
		vl_emp_logo = datosEmpresa[3]
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3099A60A-A698-4B5A-A718-94AB32E99F18"}
 */
function onActionLogin(event) {
	application.removeAllClientInfo()
	var ok = new Array()
	ok = security.authenticate('Autenticador', 'login', [vl_usuario, vl_password, 0])
	if (ok[0] == '0') {
		vl_logon_error_msg = ok[1]
		controller.focusFirstField()
	} else {
		globals.mx_usuario_id = ok[1]
		globals.mx_empresa_id = ok[2]

		if (ok[3]) {
			globals.mx_rowBGEven = ok[3]
		}
		if (ok[4]) {
			globals.mx_rowBGOdd = ok[4]		
		}
		
		databaseManager.addTableFilterParam('Sistemas',null,'emp_id','=',globals.mx_empresa_id)
		//databaseManager.addTableFilterParam('Interdata',null,'empresa_id','=',globals.sca_empresa_id)
//		application.addClientInfo('Usuario:'+ok[6])
//		application.addClientInfo('Empresa:'+globals.sca_empresa_id)
	}
}

/**
 * @properties={typeid:24,uuid:"A468F073-3576-4087-A5F8-EEB9C15ED55B"}
 */
function onActionDerechos(event) {
	application.showURL( 'http://www.litoralgestion.com.ar', '_blank')
}

/**
 * @properties={typeid:24,uuid:"E03AB334-DFF2-4BCE-88CA-87B3ECB678D6"}
 */
function CentrarCampos() {
	//var alto = application.getWindow().getHeight()
	var ancho = application.getWindow().getWidth()

	var x = (ancho / 2) - 200
	elements.vl_emp_nombre.setLocation(x,10)
	elements.vl_emp_frase.setLocation(x,40)
	//elements.argento.setLocation(x,10)
	
	
	x = ancho - 140
	elements.vl_emp_marca.setLocation(x,10)
	
	x = (ancho / 2) - 40
	elements.lbl_logo_argento.setLocation(x,104)

	x = (ancho / 2) - 120
	
	
	elements.lbl_id.setLocation(x,200)
	elements.lbl_usuario.setLocation(x,230)
	elements.lbl_password.setLocation(x,260)
	
	x = (ancho / 2) - 170
	//elements.lbl_argento.setLocation(x,160)
	elements.lbl_linea.setLocation(x,390)
	elements.vl_logon_error_msg.setLocation(x,410)
	elements.vl_copyrigth.setLocation(x,460)
	elements.vl_solucion.setLocation(x,475)

	x = (ancho / 2) - 60
	elements.btnAceptar.setLocation(x,330)

	x = (ancho / 2) - 60
	elements.vl_usuario.setLocation(x+30,230)
	elements.vl_password.setLocation(x+30,260)

	x = (ancho / 2) - 90
	elements.btnRecuperar.setLocation(x,430)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1719A023-5122-48AA-9863-22E78813BC4C"}
 */
function onShow(firstShow, event) {
    controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D448C9F8-6DB1-4977-9510-F0169CCF3986"}
 */
function onActionOlvidoPassword(event) {
//	application.showFormInDialog('Login_recuperar',-1,-1,-1,-1,'Sistema de Control de Acceso',false,false,'login',true)
    var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
    win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
    win.title= "Sistema de Control de Acceso.";
    win.show(forms.Login_recuperar);
	controller.focusFirstField()
}
