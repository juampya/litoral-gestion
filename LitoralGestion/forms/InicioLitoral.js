/**
 * @properties={typeid:35,uuid:"ADECF6F0-340F-47FC-8FBE-B86A2CCD52B1",variableType:-4}
 */
var eslaimagen = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BA358D3C-F23B-45EC-9E47-591C07CAFBAB",variableType:4}
 */
var vl_alto = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7E07F929-4D3F-4CCA-BDAC-00DA040F5A0C",variableType:4}
 */
var vl_ancho = 0;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"DE3B75B7-B0F9-457B-97F5-C200728CB0C4"}
 */
function onLoad(event) {
	CentrarTitulos()
}

/**
 * @properties={typeid:24,uuid:"712060DA-78B5-43B9-8A99-97268DF77412"}
 */
function CentrarTitulos() 
{
	vl_ancho = application.getWindow().getWidth()

	var x = (vl_ancho / 2) - 200
	elements.emp_nombre.setLocation(x,10)
	elements.emp_frase.setLocation(x,40)

	x = vl_ancho - 140
	elements.emp_logotipo2.setLocation(x,10)
	
	x = vl_ancho - 200
	elements.lbl_menu.setLocation((vl_ancho - elements.lbl_menu.getWidth()) / 2,150)
	
	elements.lbl_menu.visible = true
	
//	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
//		x = (vl_ancho / 2) - (elements.vl_mensaje_navegador_web.getWidth() / 2)
//		elements.vl_mensaje_navegador_web.setLocation(x,elements.vl_mensaje_navegador_web.getLocationY())
//	    elements.vl_mensaje_navegador_web.visible = true
//	} else {
//		elements.vl_mensaje_navegador_web.visible = false
//	}
}
/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"07D85BBB-FC25-4C17-A0EE-96003348E13B"}
 */
function WebArgento(event) {
	application.showURL('http://www.argentosoftware.com.ar', '_blank')
}

/**
 * @AllowToRunInFind
 * 
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"11C41186-4D36-4442-BB39-0925DB7B996B"}
 */
function onShow(firstShow, event) 
{
	scopes.globals.SacarMenu()
	// Setear todos los botones de menu a disable.
		var name = ''
		for (var i=0; i<elements.allnames.length; i++)
		{
			var name_btn = elements.allnames[i];
			name = name_btn.substr(0,4)
			if (name == 'btn_' || name == 'img_') {
				elements[name_btn].enabled = false
			}
			
			if(name_btn =='btn_16')
			{
				elements[name_btn].enabled = true
			}
		}	

//		Cargar las opciones del menu del operador.
		controller.find()
		usu_id = globals.mx_usuario_id
		menu_id = '^='
		var cant = controller.search()
		
//		Configurar nombre e imagen de botones.
		var boton  = ''
		var boton_nro = 00
		
		i = 0
		for ( i = 1 ; i <= cant ; i++ )
		{
			var record = foundset.getRecord(i)
			if (record.accesos_to_modulos.modulo_orden != 0) {

				boton_nro  = utils.numberFormat(record.accesos_to_modulos.modulo_orden,'00')
				boton  = 'btn_' + boton_nro
				elements[boton].enabled = true
			}
		}

		// Verificar la habilitacion de la agenda ya que esta en la barra de menues.
		if (AgendaHabilitada()) {
			elements.menu_agenda.visible = true
		} else {
			elements.menu_agenda.visible = false
		}	
		
		// Verifica si el operador puede cambiar de empresa.
		if (ag_usuariovigente.usu_nivel_acceso == 99) {
			elements.menu_empresa.visible = true
		} else {
			elements.menu_empresa.visible = false
		}
	}

/**
 * @AllowToRunInFind
 * 
 * // TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"9FE9E1BA-35EF-487F-A2CB-A1F9E76FA7F7"}
 */
function onActionEjecutar(event) {
		
	var boton = event.getElementName()
	var orden = boton.substr(4,2)

	controller.find()
	accesos_to_modulos.modulo_orden = orden
	usu_id = globals.mx_usuario_id
	menu_id = '^='
	controller.search()
	
	scopes.globals.mx_modulo_nombre = accesos_to_modulos.modulo_solution
	scopes.globals.mx_modulo_id = modulo_id
	scopes.globals.mx_modulo_nivel = 0
	scopes.globals.mx_modulo_inicio = accesos_to_modulos.modulo_form_start
	
	if(scopes.globals.mx_modulo_id)
	{
		
	}
	
	if(acc_si_no==1)
	{
		application.closeSolution(accesos_to_modulos.modulo_solution,'InicializaArgento')
	}
	else
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Gestion','Sin Permiso de Acceso.','info',controller.getName(),'Ok',null,null,null,null,null,null,null)
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3BD14641-4258-43DA-B103-CFC50880ABCF"}
 */
function onActionSalir(event) {
	security.logout('LitoralGestion','InicializaArgento')
}

/**
 * @param {Object} event
 * @properties={typeid:24,uuid:"2C1AA8DA-45CC-4BAD-8143-FC80BA0B351A"}
 */
function onActionPassword(event) 
{
	forms.Clave_Usuario.controller.loadRecords(globals.mx_usuario_id)
	
	var win1 = application.createWindow("Dialog", JSWindow.MODAL_DIALOG)
		win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win1.title= 'Litoral Gestion';
		win1.show(forms.Clave_Usuario);
 }

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D27D7605-ED16-422D-83CD-FFA3695A397C"}
 */
function onActionMiPerfil(event) {
	forms.Litoral_perfil_usuario.controller.loadRecords(globals.mx_usuario_id)

	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
    win.title= 'Litoral Gestion';
    win.show(forms.Litoral_perfil_usuario);
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F4364E04-0CB2-4542-B266-1B31DDCCF51B"}
 */
function onActionAgenda(event) {
    application.closeSolution('Agenda','InicializaArgento')
}

/**
 * @properties={typeid:24,uuid:"A30C39E9-8858-47C8-907F-6BE40C09CA93"}
 * @AllowToRunInFind
 */
function AgendaHabilitada(){
//	 /** @type {JSFoundset<db:/Interdata/adn_home_usuarios>}*/
//	var fs_agenda = databaseManager.getFoundSet('Interdata','adn_home_usuarios')
//	fs_agenda.find()
//	fs_agenda.us_id = globals.sca_usuario_id
//	fs_agenda.home_id = 3
//	var cant = fs_agenda.search()
//	if (cant==0) return false
//	else return true
}

/**
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"73DDCD1D-8C64-4264-B346-EB6756B60AC1"}
 */
function onResize(event) {
	CentrarTitulos()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"542F93B3-E985-48FC-B996-38CF7F9B2847"}
 */
function onActionEmpresas(event) {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
    win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
    win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
    win.resizable = false
    win.title= 'Seleccion de Empresa.';
    win.show(forms.litoral_empresas);
}
