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

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"AF764B76-5929-445A-928F-4A144F0ACF1A"}
 * @AllowToRunInFind
 */
function onDataChangeCargo(oldValue, newValue, event) 
{
	if(newValue != 0 && newValue != 5)
	{	
		/** @type {JSFoundset<db:/sistemas/mat_matriculados>}*/
		var fs_matriculados = databaseManager.getFoundSet('Sistemas','mat_matriculados')
			fs_matriculados.find()
			fs_matriculados.mat_consejo_id = newValue
		if(fs_matriculados.search()!=0)
		{
			globals.ventanaAceptar("Este cargo ya esta ocupado por "+fs_matriculados.mat_nombre,controller.getName())
			mat_consejo_id = oldValue
			return false
		}
		else
		{
			mat_consejo_id = newValue
			return true
		}
	}
	else
	{
		mat_consejo_id = newValue
		return true
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F21B10CA-9D75-43D5-98E4-EF7063E5AF13"}
 */
function onActionMapLocation(event) 
{
	//scopes.globals.googleMaps_x_cliente(mat_id)

//
//	var vm_cant_A = 0
//	var vm_cant_B = 0
//	var vm_cant_C = 0
//	var vm_cant_sin_cate = 0
//	
	var vm_center = foundset.mat_direccion_real+","+foundset.mat_matriculados_to_localidades_real.localidad_nombre+","+foundset.mat_matriculados_to_localidades_real.localidades_to_departamentos.depar_descripcion+",Santa Fe,Argentina"
	var vm_size = "800x900"
//	var vm_markers_C = "&markers=color:red|label:C|"
//	var vm_markers_B = "&markers=color:yellow|label:B|"
//	var vm_markers_A = "&markers=color:green|label:A|"
//	var vm_markers_sin_categoria = "&markers=color:white|label:S|"
	var vm_markers = "&markers=color:red|label:M|"+foundset.mat_direccion_real+","+foundset.mat_matriculados_to_localidades_real.localidad_nombre+","+foundset.mat_matriculados_to_localidades_real.localidades_to_departamentos.depar_descripcion+",Santa Fe,Argentina"	
//	
//	for(var i = 1; i<=databaseManager.getFoundSetCount(foundset); i++ )
//	{
//		foundset.setSelectedIndex(i)
//		if(foundset.enc_categoria == "CATEGORIA A")
//		{
//			vm_cant_A = vm_cant_A + 1
//			
//			if(vm_cant_A >= 2)
//			{
//				vm_markers_A = vm_markers_A +"|"+foundset.enc_calle+" "+foundset.enc_calle_nro+foundset.crm_encuestas_to_crm_ciudad.ciu_nombre+",Argentina"
//			}
//			else
//			{
//				vm_markers_A = vm_markers_A + foundset.enc_calle+" "+foundset.enc_calle_nro+foundset.crm_encuestas_to_crm_ciudad.ciu_nombre+",Argentina"
//			}
//		}
//		else
//		{
//			if(foundset.enc_categoria == "CATEGORIA B")
//			{
//				vm_cant_B = vm_cant_B + 1
//			
//				if(vm_cant_B >= 2)
//				{
//					vm_markers_B = vm_markers_B+"|"+foundset.enc_calle+" "+foundset.enc_calle_nro+foundset.crm_encuestas_to_crm_ciudad.ciu_nombre+",Argentina"
//				}
//				else
//				{
//					vm_markers_B = vm_markers_B+foundset.enc_calle+" "+foundset.enc_calle_nro+foundset.crm_encuestas_to_crm_ciudad.ciu_nombre+",Argentina"
//				}
//			}
//			else
//			{
//				if(foundset.enc_categoria == "CATEGORIA C")
//				{
//					vm_cant_C= vm_cant_C + 1
//			
//					if(vm_cant_C >= 2)
//					{
//						vm_markers_C = vm_markers_C+"|"+foundset.enc_calle+" "+foundset.enc_calle_nro+foundset.crm_encuestas_to_crm_ciudad.ciu_nombre+",Argentina"
//					}
//					else
//					{
//						vm_markers_C = vm_markers_C+foundset.enc_calle+" "+foundset.enc_calle_nro+foundset.crm_encuestas_to_crm_ciudad.ciu_nombre+",Argentina"
//					}
//				}
//				else
//				{
//					vm_cant_sin_cate= vm_cant_sin_cate + 1
//			
//					if(vm_cant_sin_cate >= 2)
//					{
//						vm_markers_sin_categoria = vm_markers_sin_categoria+"|"+foundset.enc_calle+" "+foundset.enc_calle_nro+foundset.crm_encuestas_to_crm_ciudad.ciu_nombre+",Argentina"
//					}
//					else
//					{
//						vm_markers_sin_categoria = vm_markers_sin_categoria+foundset.enc_calle +" "+ foundset.enc_calle_nro+foundset.crm_encuestas_to_crm_ciudad.ciu_nombre+",Argentina"
//					}
//				}
//			}
//		}
//	}
//	
//	if(vm_cant_A > 0)
//	{
//		vm_markers = vm_markers + vm_markers_A
//	}
//	
//	if(vm_cant_B > 0)
//	{
//		vm_markers = vm_markers + vm_markers_B
//	}
//
//	if(vm_cant_C > 0)
//	{
//		vm_markers = vm_markers + vm_markers_C
//	}
//
//	if(vm_cant_sin_cate > 0)
//	{
//		vm_markers = vm_markers + vm_markers_sin_categoria
//	}

	var url = 'http://maps.google.com/maps/api/staticmap?center='+vm_center+'&visible='+vm_markers+'&size='+vm_size+'&sensor=false'
	
	application.showURL( url, '_blank')

}
