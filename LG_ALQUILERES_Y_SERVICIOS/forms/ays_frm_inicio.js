/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B4B35ABA-424C-4A01-AC8E-4B1207A616F5",variableType:4}
 */
var vl_cant_reng_n1 = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DB9D9DF6-184D-4FD2-A779-F9C6A8A1A1A0",variableType:4}
 */
var vl_cant_reng_n2 = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8CEA0FA4-2E86-447E-9D4F-13A167471D21",variableType:4}
 */
var vl_ancho_form = null;

/**
 * @properties={typeid:35,uuid:"02D206E1-AC78-40BC-8C17-39702BB35870",variableType:-4}
 */
var menunivel3 = null;

/**
 * @properties={typeid:35,uuid:"D4517360-B7C1-4707-8458-0CA464358906",variableType:-4}
 */
var menunivel2 = null;

/**
 * @properties={typeid:35,uuid:"A530ABB3-77F8-495C-BE0E-51BE5674DB9F",variableType:-4}
 */
var menunivel1 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6B6E29CA-BCCF-48E1-9D56-E5BD00595AF1"}
 */
var dt_n2_01 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EA2EBEE2-61E6-400C-8120-8BC94412B0DE"}
 */
var dt_n2_02 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E51C203A-88F2-4022-BB8E-04802DBCA205"}
 */
var dt_n2_03 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3D8F479E-BB24-4745-9895-8D9E268D7E0F"}
 */
var dt_n2_04 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"351A8901-7D63-41BB-AC97-7BEC28E23DAB"}
 */
var dt_n2_05 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7350A5EF-31BF-4D10-BD15-1808D557F0F2"}
 */
var dt_n2_06 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FCDC2DCA-7F1A-47E0-806D-527BC6696D1E"}
 */
var dt_n2_07 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A579D015-D672-40E3-A0B7-60725E88FE4B"}
 */
var dt_n2_08 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BF121A5F-09FE-4357-AA6D-F7A9811DA950"}
 */
var dt_n1_01 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4F25E1BB-F6FE-44F9-8100-345231E3A106"}
 */
var dt_n1_02 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7514FA6A-EE8A-4722-857E-511F69C20AC3"}
 */
var dt_n1_03 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"98641DB7-9C5D-4240-8D5E-E200D1EFD6C6"}
 */
var dt_n1_04 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5150A7E6-C020-43C0-85F2-2986B2D0033D"}
 */
var dt_n1_05 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8D26FCF5-0BCD-4472-A7E3-0428BEE4B964"}
 */
var dt_n1_06 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BBE49FFD-9D6A-433A-894A-FDC0BFD5D18E"}
 */
var dt_n1_07 = null;

/**
 * @properties={typeid:24,uuid:"587B2614-3920-476F-BD37-9C86842A0387"}
 */
function Salir()
{
	if(application.isInDeveloper())
	{
		application.exit()
	}
	else
	{
		application.closeSolution('LitoralGestion','InicializaArgento')
	}
}

/**
 * @properties={typeid:24,uuid:"1FF9DF60-620A-4F12-86FB-E0A5986324D8"}
 */
function Inmuebles() 
{
	forms.ays_frm_inmuebles_abm.vl_frm_anterior = controller.getName()
	forms.ays_frm_inmuebles_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"971BCC7D-4D48-4D61-9915-D7E287830494"}
 */
function Inquilinos() 
{
	forms.ays_frm_inquilinos_abm.vl_frm_anterior = controller.getName()
	forms.ays_frm_inquilinos_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"7560C24F-C29E-4FFE-999A-A83BC61CDF32"}
 */
function Garantes() 
{
	forms.ays_frm_garantes_abm.vl_frm_anterior = controller.getName()
	forms.ays_frm_garantes_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"9330F188-82DC-4984-AE8F-68746E47B601"}
 */
function Propietarios() 
{
	forms.ays_frm_propietarios_abm.vl_frm_anterior = controller.getName()
	forms.ays_frm_propietarios_abm.controller.show()
}


/**
 * @properties={typeid:24,uuid:"7194CEC2-5781-4822-9114-A3661DB3CF12"}
 */
function Conceptos() 
{
	forms.ays_frm_conceptos_abm.vl_frm_anterior = controller.getName()
	forms.ays_frm_conceptos_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"5F6A6B80-53FE-478A-8F06-5190C3AF21E9"}
 */
function TipoInmueble() 
{
	forms.ays_frm_tipos_inmueble_abm.vl_frm_anterior = controller.getName()
	forms.ays_frm_tipos_inmueble_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"25AAABE5-4DC9-4838-BE6D-4EBE1E0CB2DA"}
 */
function TipoDocumentacion() 
{
	forms.ays_frm_documentacion_abm.vl_frm_anterior = controller.getName()
	forms.ays_frm_documentacion_abm.controller.show()
}


/**
 * @properties={typeid:24,uuid:"07961F9A-3AB1-4C92-BAC0-B2C60CB3473D"}
 */
function ConsultaContratos() 
{
	forms.ays_frm_contratos_abm.vl_frm_anterior = controller.getName()
	forms.ays_frm_contratos_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"3E3BEF7C-2A47-421C-BB8C-1D6C411B7E3E"}
 */
function ConsultaMovimientos() 
{
//	forms.vc_frm_condicionesvta_abm.vl_frm_anterior = controller.getName()
//	forms.vc_frm_condicionesvta_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"EB1B4E98-E18F-4F9A-BCA0-43F4469F2CCA"}
 */
function Zonas() 
{
//	forms.vc_frm_zonas_abm.vl_frm_anterior = controller.getName()
//	forms.vc_frm_zonas_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"7CC62446-FE28-4754-9327-4B54CB11407F"}
 */
function Talonarios() 
{
	forms.ays_frm_talonarios_abm.vl_frm_anterior = controller.getName()
	forms.ays_frm_talonarios_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"322B10EF-F14D-4065-9481-BF0708CFDDEC"}
 */
function Parametros() 
{
//	forms.vc_frm_parametros.vl_frm_anterior = controller.getName()
//	forms.vc_frm_parametros.controller.show()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"CED36C47-CD93-4166-B950-D9DAE2E161DB"}
 */
function onActionArchivo(event) 
{

	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7AFB5F7B-394B-44D0-BFF3-F32F1D5696BD"}
 */
function onShow(firstShow, event) 
{
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
	{
		elements.tabs_1.removeAllTabs()
		elements.tabs_1.addTab(forms.modulo_menu.controller.getName())
	}
	else
	{
		elements.tabs_1.removeAllTabs()
		scopes.globals.CargarMenu()
	}
//	vl_ancho_form = application.getWindow().getWidth()
//	if(firstShow)
//	{
//		cargarMenuNivel1()
//	}
}

/**
 * @properties={typeid:24,uuid:"D6D6653B-2DA1-409C-B0DF-F13C6B161564"}
 */
function cargarMenuNivel1() {
	
//	//elements.grp_btn_n1.visible = false
//	
//	menunivel1 = new Array()
//
//	/** @type {JSFoundset<db:/Sistemas/menus>}*/
//	var fs_n1 = cargarOpciones(1,null)
//			
//	//Variables para cargar la imagen1
//	var serverName = 'sistemas'
//	var tableName  = 'menus'
//	var columnName = 'menu_icon'
//	var mimeType   = 'application/jpg' 
//		
//	//Calcular cuantos botones entran por linea
//	/**@type {Number} */
//	var btn_limit1 = ((vl_ancho_form - 20) / 205)
//	var vArr = btn_limit1.toString().split('.')
//	var btn_limit = vArr[0]
//	
//	//Capacidad maxima de proyectos 15
//	var cant = databaseManager.getFoundSetCount(fs_n1)
//	if (cant > 15) cant = 15
//	
//	for (var i=1; i <= cant; i++) {
//		var myRecord = fs_n1.getRecord(i)
//		
//		//arrayMenuN1.push(myRecord.home_id)
//		menunivel1.push(myRecord.menu_id)
//		
//		var URL = 'media:///servoy_blobloader?servername=' + serverName
//		URL += '&tablename=' + tableName;
//		URL += '&dataprovider=' + columnName;
//		URL += '&rowid1=' + myRecord.menu_id;
//		URL += '&mimetype=' + mimeType;
//		
//		var tmp_html = 
//			'<html>'
//			+'<table style="width:100%">' 
//			+'<tr>' 
//			+'<td style="height:32px;" align="center"><img src="' + URL + '"></td>'
//			+'</tr>' 
//			+'<tr>' 
//			+'<td align="center"><a style="">' + myRecord.menu_titulo + '</a>' 
//			+'</td>' 
//			+'</tr>'
//			+'</table>' 
//			+'</html>'
//		
//		var pun = utils.numberFormat(i,'0')
//
//		elements['btn_menu'+pun].visible = true
//		elements['btn_menu'+pun].toolTipText = myRecord.menu_titulo
//		
//		forms[controller.getName()]['dt_n1_0'+pun] = tmp_html
//	
//		if (i <= btn_limit) {
//			vl_cant_reng_n1 = 1
//			elements['btn_menu'+pun].setLocation(((i - 1) * 120) + 20,elements.btn_menu1.getLocationY())
//		} else {
//			vl_cant_reng_n1 = 2
//			elements['btn_menu'+pun].setLocation(((i - btn_limit - 1) * 120) + 20,elements.btn_menu1.getLocationY() + 105)
//		}
//	}
}

/**
 * @return {JSFoundSet}
 * @AllowToRunInFind
 * @param {Number} lnk_nivel
 * @param {String} lnk_padre
 *
 * @properties={typeid:24,uuid:"6A3D6393-DD2E-486A-AB00-89BBEBBA4FBC"}
 */
function cargarOpciones(lnk_nivel, lnk_padre) 
{
//	/** @type {JSFoundset<db:/interdata/adn_home_menu>}*/
//	var fs_adn_home_menu = databaseManager.getFoundSet('sistemas','adn_home_menu')
//
//	fs_adn_home_menu.find()
//	fs_adn_home_menu.home_v2_nivel = lnk_nivel
//	if (lnk_padre != null) fs_adn_home_menu.home_v2_producto_padre 	= lnk_padre
//	fs_adn_home_menu.adn_home_menu_to_adn_home_usuarios.us_id		= globals.sca_usuario_id
//	fs_adn_home_menu.adn_home_menu_to_adn_empresas_rel_soluciones.emp_id	= globals.sca_empresa_id
//	fs_adn_home_menu.search()
//	fs_adn_home_menu.sort('home_orden asc')
	
	
	/** @type {JSFoundset<db:/Sistemas/menus>}*/
	var fs_menus = databaseManager.getFoundSet('Sistemas','menus')	
		fs_menus.find()
		fs_menus.modulo_id = scopes.globals.mx_modulo_id
		fs_menus.menu_principal = lnk_nivel
		fs_menus.search()
		fs_menus.sort('menu_orden asc')
	
	//return fs_adn_home_menu
	return fs_menus
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"80AC8FE0-9E0F-4447-A672-4E77A09D81A1"}
 */
function onActionEjecutarN1(event) {
	
//	elements.grp_btn_n2.visible = false
//	elements.grp_btn_n3.visible = false
//	
//	/**@type {Number} */
//	vl_btn_n1 = event.getElementName().substr(6,2)
//	var id_home_menu = arrayMenuN1[vl_btn_n1 - 1]
//	
//	//Utilizado en click derecho para permisos
//	globals.vg_home_id = arrayMenuN1[vl_btn_n1 - 1]
//
////	application.output('event:' + event.getElementName() + ' Boton:' + vl_btn_n1 + '  ID:' + id_home_menu)
//	
//	if (vl_btn_n1_anterior != null) {
//		elements[vl_btn_n1_anterior].bgcolor = '#0080ff'
//	}
//	elements[event.getElementName()].bgcolor = '#ff8000'
//	vl_btn_n1_anterior = event.getElementName()
//
//	/** @type {JSFoundset<db:/Interdata/adn_home_menu>}*/
//	var fs_adn_home_menu = databaseManager.getFoundSet('Interdata','adn_home_menu')
//	fs_adn_home_menu.loadRecords(id_home_menu)
//
//	if (fs_adn_home_menu.home_tipo_ejecucion == 1) { //Es un menu, mostrar submenu
////		elements.lbl_titulo_n2.text = fs_adn_home_menu.home_btn_title
//		cargarMenuNivel2(fs_adn_home_menu.home_v2_producto, fs_adn_home_menu.home_btn_title)
//	} else { //Ejecutar solucion
//		setearUltimaSeleccion(vl_btn_n1,0,0)
//		application.closeSolution(fs_adn_home_menu.home_solution,'MetodoInicioIntegra')
//	}
}
/**
 * @properties={typeid:24,uuid:"0D105044-0CBF-47EA-B462-576FA5EC6078"}
 */
function Documentacion() 
{
	forms.ays_frm_documentacion_abm.vl_frm_anterior = controller.getName()
	forms.ays_frm_documentacion_abm.controller.show()
}