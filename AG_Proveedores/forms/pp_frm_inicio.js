/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3FCB8B2A-C8A7-4B54-90F9-5FE7C76970FC",variableType:4}
 */
var vl_cant_reng_n1 = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D0112491-2881-4F8C-A696-0B9F984F4659",variableType:4}
 */
var vl_cant_reng_n2 = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6CBCBD1A-F70B-4F65-999E-912FB93B746F",variableType:4}
 */
var vl_ancho_form = null;

/**
 * @properties={typeid:35,uuid:"C7374F18-5F71-4642-AAAA-C0606C2DD301",variableType:-4}
 */
var menunivel3 = null;

/**
 * @properties={typeid:35,uuid:"386E136D-0A99-4F03-A4B7-6CB395416E24",variableType:-4}
 */
var menunivel2 = null;

/**
 * @properties={typeid:35,uuid:"3BE462DB-0F10-4FFD-890A-93283DDA6987",variableType:-4}
 */
var menunivel1 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5CD9AE98-8084-44F0-B215-4FFB6D63BDD8"}
 */
var dt_n2_01 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FEE4FC30-2788-47B7-8A93-8BE867BA7CFA"}
 */
var dt_n2_02 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"35D9BB3A-0369-4773-9F4D-220C95219361"}
 */
var dt_n2_03 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"017BEC6F-2A06-408E-A070-D88A7175D76E"}
 */
var dt_n2_04 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"862FB5E7-5293-4E3E-83FB-FD431D47BDE1"}
 */
var dt_n2_05 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1341138D-9A0C-4FEB-AFE9-F57E97213DFF"}
 */
var dt_n2_06 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"260AFC3A-D84E-4ED4-ACA2-AFD036D74DA2"}
 */
var dt_n2_07 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BC096FB9-C6B8-43A2-935C-7A5CA296E657"}
 */
var dt_n2_08 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F6AF926A-B433-45C7-B81A-F057A02927CE"}
 */
var dt_n1_01 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8BC86827-CF31-48DB-AEFC-FF342605F1E3"}
 */
var dt_n1_02 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4997A90D-302C-4734-AE6F-B74BCDFA7202"}
 */
var dt_n1_03 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1F4AC45E-7043-4090-99DE-5550EBACB4FE"}
 */
var dt_n1_04 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"45CDE308-B126-46C4-8A18-F586355067A2"}
 */
var dt_n1_05 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"47525E4C-AC17-49E0-8333-7526C0121AC8"}
 */
var dt_n1_06 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1F947275-F022-4EDA-9533-90060C884376"}
 */
var dt_n1_07 = null;

/**
 * @properties={typeid:24,uuid:"E104ACCC-7458-4AA1-A57D-CDBBBA426B65"}
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
 * @properties={typeid:24,uuid:"D16E4567-B89C-4710-8A15-7E66DC198148"}
 */
function Proveedores() 
{
	forms.pp_frm_prov_abm.vl_frm_anterior = controller.getName()
	forms.pp_frm_prov_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"D5B9BE35-52B4-4D85-B101-ACF04F90A652"}
 */
function Grupos() 
{
	forms.vc_frm_grupos_abm.vl_frm_anterior = controller.getName()
	forms.vc_frm_grupos_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"42472BF6-428F-4344-94E4-124677BB95D3"}
 */
function Transportes() 
{
	forms.vc_frm_transportes_abm.vl_frm_anterior = controller.getName()
	forms.vc_frm_transportes_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"01727990-3922-4297-952F-9E344D14CF44"}
 */
function Vendedores() 
{
	forms.vc_frm_vendedores_abm.vl_frm_anterior = controller.getName()
	forms.vc_frm_vendedores_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"8FA4AB14-5AE2-473E-94B0-787882025568"}
 */
function CondicionesVta() 
{
	forms.vc_frm_condicionesvta_abm.vl_frm_anterior = controller.getName()
	forms.vc_frm_condicionesvta_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"35BD8995-0186-4DDC-9037-26962A2E306B"}
 */
function Zonas() 
{
	forms.vc_frm_zonas_abm.vl_frm_anterior = controller.getName()
	forms.vc_frm_zonas_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"32493873-2419-41F3-92DE-6C435D5B2902"}
 */
function Talonarios() 
{
	forms.vc_frm_talonarios_abm.vl_frm_anterior = controller.getName()
	forms.vc_frm_talonarios_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"7669C689-FD22-4551-A297-354B3B77220C"}
 */
function ComprobantesNCND() 
{
	
}

/**
 * @properties={typeid:24,uuid:"EECB4E42-57C5-49C4-9132-50E5B93E0842"}
 */
function TipoAsientos() 
{
	
}

/**
 * @properties={typeid:24,uuid:"E193FA4C-E40C-439E-AAC2-1E0924E78ED3"}
 */
function Retenciones() 
{
	
}

/**
 * @properties={typeid:24,uuid:"A129CDFA-ABC7-4C71-B6DD-F7E855D977EB"}
 */
function DatosComprobantesReten() 
{
	
}

/**
 * @properties={typeid:24,uuid:"C4B5FC92-DF86-4065-A520-BACEE3ABA85D"}
 */
function RetencionGanancias() 
{
	
}

/**
 * @properties={typeid:24,uuid:"C9FCB839-96D6-4295-9246-54F5CD2F3F57"}
 */
function RetencionIngBrutos() 
{
	
}

/**
 * @properties={typeid:24,uuid:"32C4A9C4-F7AB-4338-8B4C-A3EDD40F7EFC"}
 */
function RetencionIVA() 
{
	
}

/**
 * @properties={typeid:24,uuid:"3DA5866E-2369-4F09-AE64-3DC87137071C"}
 */
function Parametros() 
{
	forms.pp_frm_parametros.vl_frm_anterior = controller.getName()
	forms.pp_frm_parametros.controller.show()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"63885266-71F2-482E-A679-56E20090EB5D"}
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
 * @properties={typeid:24,uuid:"D4D99EAB-8629-4690-9047-E2F13A820CA9"}
 */
function onShow(firstShow, event) 
{
	vl_ancho_form = application.getWindow().getWidth()
	if(firstShow)
	{
		cargarMenuNivel1()
	}
}

/**
 * @properties={typeid:24,uuid:"34954A22-DC96-44B7-B16A-D5AE4C30CCB0"}
 */
function cargarMenuNivel1() {
//	
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
 * @properties={typeid:24,uuid:"9B927F3B-43AD-40F8-BDFD-6437F4E6682E"}
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
 * @properties={typeid:24,uuid:"D0FB4ADF-7CD8-422F-87EA-9DB17028A1B0"}
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
