/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1D608637-3CB3-4590-AAC5-852349057BD6"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2D2594EB-005A-4B53-9E3C-9DA0F0AB758F",variableType:4}
 */
var vl_nuevo = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"1A990727-0DB5-4FC0-8435-D6A8A3F6FBC7"}
 */
function onActionCancelar(event) {
	
	databaseManager.revertEditedRecords(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"795ECCDA-F647-4323-9CDF-9F83DA23FE2F"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"3502BD1C-6F14-4505-B646-37AC8C9960C8"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id=1
			
	}
	if(vl_nuevo==2)
	{
		controller.duplicateRecord(false)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"40F717E0-7D4D-4DBD-88B5-BE2FAC861504"}
 */
function onActionEnviarMail(event) 
{
//	scopes.globals.vg_destinatarios = mat_e_mail
//	scopes.globals.vg_asunto 		= null
//	scopes.globals.vg_cuerpo 		= null
//	scopes.globals.vg_adjuntos 		= null
//	
//	var win = application.createWindow("frm_cuerpo_mail", JSWindow.MODAL_DIALOG);
//		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
//		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
//		win.resizable = false
//		win.title= 'Mail';
//		win.show(forms.lg_form_mail);
	
	if(utils.stringMiddle(application.getOSName(),1,7) == "Windows")
	{
		application.executeProgram('rundll32', ['url.dll,FileProtocolHandler', 'mailto:'+mat_e_mail])
	}
	
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"B4F22E93-86F5-4A7E-9F2D-197F3329FF81"}
 */
function onDataChangeFoto(oldValue, newValue, event) 
{
	if((plugins.images.getImage(mat_foto).getWidth() > 200) || (plugins.images.getImage(mat_foto).getHeight() > 200))
	{
		mat_foto = null
		globals.ventanaAceptar("La foto debe tener un tamaño menor o igual que 200x200 pixeles",controller.getName())
	}
	return true
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"910AE5C5-81C4-4019-82E2-35195B1D3357"}
 * @AllowToRunInFind
 */
function ControlaNroMatricula(oldValue, newValue, event) 
{
	/** @type {JSFoundset<db:/sistemas/mat_matriculados>}*/
	var fs_matriculados = databaseManager.getFoundSet('Sistemas','mat_matriculados')
		fs_matriculados.find()
		fs_matriculados.mat_nro_matricula = newValue
		if(fs_matriculados.search()==0)
		{
			return true
		}
		else
		{
			globals.ventanaAceptar("Ese nro de matrícula ya existe.",controller.getName())
			mat_nro_matricula = oldValue
			return false
		}
}
