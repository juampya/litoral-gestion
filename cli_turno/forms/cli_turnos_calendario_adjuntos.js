/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9D9B90E2-D373-4998-8725-06C57EEC4E95"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event)
{
//	elements.btn_agregar.enabled = true
//	elements.btn_borrar.enabled = true
	elements.btn_detalle.enabled = true
	elements.btn_editar.enabled = true
	
	if(scopes.globals.vg_archivo_tabla_id!=null)
	{
		databaseManager.setAutoSave(false)
		controller.find()
		adj_tabla_id = scopes.globals.vg_archivo_tabla_id
		func_codigo  = scopes.globals.vg_archivo_funcion_codigo
		controller.search()
		databaseManager.setAutoSave(true)
	}
	else
	{
		foundset.clear()
	}
	
//	if (globals.sca_usuariovigente.us_tipo_usr != 1) {
//		if (globals.sca_perm_insert == 1) elements.btn_agregar.enabled = true
//		else elements.btn_agregar.enabled = false
//		if (globals.sca_perm_update == 1) elements.btn_editar.enabled = true
//		else elements.btn_editar.enabled = false
//	}
	
	if (scopes.globals.vg_archivo_tabla_id == 0 || scopes.globals.vg_archivo_tabla_id == null) {
//		scopes.globals.VentanaGenerica(ag_usuariovigente.usu_id,'Info Adjuntos.', 'Falta declara variable global de tabla.\nPor favor, avise a Litoral Software!', 'info',controller.getName(),'OK', '',null,null,null,null,null,null)
//		elements.btn_agregar.enabled = false
//		elements.btn_borrar.enabled = false
		elements.btn_detalle.enabled = false
		elements.btn_editar.enabled = false
	}
	
	if (scopes.globals.vg_archivo_funcion_codigo == 0 || scopes.globals.vg_archivo_funcion_codigo == null) {
		scopes.globals.VentanaGenerica(ag_usuariovigente.usu_id,'Info Adjuntos.', 'Falta declara variable global de funcion.\nPor favor, avise a Litoral Software!', 'info',controller.getName(),'OK', '',null,null,null,null,null,null)
//		elements.btn_agregar.enabled = false
//		elements.btn_borrar.enabled = false
		elements.btn_detalle.enabled = false
		elements.btn_editar.enabled = false
	}
}

/**
 * @properties={typeid:24,uuid:"B1F47573-4CA0-4FE1-89F3-A532EC1331DD"}
 */
function AgregarFoto()
{
    var win = application.createWindow("Dialog_adj_new", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
    win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win.resizable = false
    win.title= 'Agregar Documento';
    win.show(forms.lg_adjuntos_nuevo);

}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"410F11C1-88FC-44E3-9F11-8994741A9556"}
 */
function onActionAbrir(event) 
{
	var vOS = application.getOSName();

	if(utils.stringPatternCount(vOS, 'Windows') == 1){
		if (!plugins.file.createFolder('c:/tmp')) {
			application.output("Carpeta ya creada.");
		}
	}

	var tempfilename='/tmp/'+adj_filename
	plugins.file.writeFile(tempfilename,adj_adjunto)
	
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
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"BBF334F4-805D-4653-84FB-35A092B4FA7F"}
 */
function onActionBorrar(event) 
{
//	if (globals.sca_usuariovigente.us_tipo_usr != 1) {
//		if (adjunto_grab_ope != globals.sca_usuario_id) {
//			globals.VentanaGenerica(sca_usuariovigente.us_id,'Integra.', 'Solamente el dueño puede eliminarlo!!!', 'info',controller.getName(),'OK', '', null,null,null,null,null,null)
//			return
//		}
//	}
	globals.VentanaGenerica(ag_usuariovigente.usu_id,'Borrar Adjunto.', 'Desea borrar el documento adjunto?\nID:'+adj_id+'\nDescripcion:'+adj_descripcion, 'question',controller.getName(),'No', '', 'Si', 'BorrarRegistro',null,null,null,null)     
}

/**
 * @properties={typeid:24,uuid:"A0B6A52A-5E1B-4261-9C15-A88AB48F983F"}
 */
function BorrarRegistro()
{
	controller.deleteRecord()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"8A6EDCE4-B1A0-4A19-9C00-3F32A8A07DDA"}
 */
function onActionEditar(event) 
{
	forms.lg_adjuntos_modificar.controller.loadRecords(adj_id)

	var win = application.createWindow("Dialog_adj_edit", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
    win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win.resizable = false
    win.title= 'Propiedades del Adjunto';
    win.show(forms.lg_adjuntos_modificar);

}
