
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DDD87E64-20D5-4CFF-990F-0C804D93347B"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event)
{
	elements.btn_agregar.enabled = true
	elements.btn_borrar.enabled = true
	elements.btn_detalle.enabled = true
	elements.btn_editar.enabled = true
	
	controller.find()
	adj_tabla_id = scopes.globals.vg_archivo_tabla_id
	func_codigo = scopes.globals.vg_archivo_funcion_codigo
	controller.search()
	
//	if (globals.sca_usuariovigente.us_tipo_usr != 1) {
//		if (globals.sca_perm_insert == 1) elements.btn_agregar.enabled = true
//		else elements.btn_agregar.enabled = false
//		if (globals.sca_perm_update == 1) elements.btn_editar.enabled = true
//		else elements.btn_editar.enabled = false
//	}
	
	if (globals.vg_archivo_tabla_id == 0 || globals.vg_archivo_tabla_id == null) {
		globals.VentanaGenerica(ag_usuariovigente.usu_id,'Info Adjuntos.', 'Falta declara variable global de tabla.\nPor favor, avise a Litoral Software!', 'info',controller.getName(),'OK', '',null,null,null,null,null,null)
		elements.btn_agregar.enabled = false
		elements.btn_borrar.enabled = false
		elements.btn_detalle.enabled = false
		elements.btn_editar.enabled = false
	}
	
	if (globals.vg_archivo_funcion_codigo == 0 || globals.vg_archivo_funcion_codigo == null) {
		globals.VentanaGenerica(ag_usuariovigente.usu_id,'Info Adjuntos.', 'Falta declara variable global de funcion.\nPor favor, avise a Litoral Software!', 'info',controller.getName(),'OK', '',null,null,null,null,null,null)
		elements.btn_agregar.enabled = false
		elements.btn_borrar.enabled = false
		elements.btn_detalle.enabled = false
		elements.btn_editar.enabled = false
	}
}


/**
 * @properties={typeid:24,uuid:"1EE2A8BF-280A-425B-94FF-8BBF1EC51F99"}
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
 * @properties={typeid:24,uuid:"FD6DB163-398A-458B-8485-B0E5FB33025D"}
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
 * @properties={typeid:24,uuid:"C26C434D-CF74-461E-AB4E-FA0094AE2F99"}
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
 * @properties={typeid:24,uuid:"AEAE80B5-FC3D-4185-AD57-321787ED82ED"}
 */
function BorrarRegistro()
{
	controller.deleteRecord()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"2B99710A-ABFB-4E98-96BA-F123210A71D0"}
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