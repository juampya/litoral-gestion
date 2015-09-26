/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0C7466F0-B370-4DE3-AB6A-80DAD47E3FFB"}
 */
var vl_observación = null;

/**
 * @properties={typeid:35,uuid:"851D81D7-D422-40B8-A629-C451EE9B275C",variableType:-4}
 */
var vl_adjunto;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"70FB4D6B-A2F4-4036-844D-8C909335994C"}
 */
var vl_descripcion = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"30AE0706-0426-4CC8-BCE7-B33D923014BC"}
 */
var vl_extension = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0887AD7D-3279-4438-B0EA-F1972C7530E7"}
 */
var vl_filename = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CF8BF801-DF8F-4965-BFBA-93DC1FAD45DC"}
 */
var vl_filepath = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"54272257-1682-46D1-8949-C70E67099082",variableType:4}
 */
var vl_size = 0;

/**
 * @properties={typeid:24,uuid:"A6BE8F86-9361-4259-9AB5-252E2AA1F678"}
 */
function Volver()
{
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog_adj_new').hide()
}

/**
 * @properties={typeid:24,uuid:"A9340590-BAF6-4A42-B490-1B226F72E97F"}
 */
function GrabarFoto()
{
	if (vl_descripcion && vl_filename){
		GrabarAdjunto()
		forms.lg_adjuntos.onShow(null,null)
		application.getWindow('Dialog_adj_new').hide()
	} else {
		globals.VentanaGenerica(ag_usuariovigente.usu_id,'Info de Adjunto.', 'Faltan completar campos.\nPor favor, verifique!', 'info',controller.getName(),'OK', '',null,null,null,null,null,null)
	} 
}

/**
 * @properties={typeid:24,uuid:"CC1FEE2D-A8CA-4306-B056-C251ED6ADEB0"}
 */
function GrabarAdjunto() 
{
	 /** @type {JSFoundset<db:/Sistemas/lg_adjuntos>}*/
	var fs_adj = databaseManager.getFoundSet('Sistemas','lg_adjuntos')
	
	fs_adj.newRecord()
	fs_adj.adj_tabla_id 	= scopes.globals.vg_archivo_tabla_id
	fs_adj.func_codigo 		= globals.vg_archivo_funcion_codigo
	fs_adj.adj_descripcion  = vl_descripcion
	fs_adj.adj_adjunto 		= vl_adjunto
	fs_adj.adj_filename 	= vl_filename
	fs_adj.adj_path 		= vl_filepath
	fs_adj.adj_size 		= vl_size
	fs_adj.adj_extension 	= vl_extension
	fs_adj.adj_observacion 	= vl_observación
	databaseManager.saveData()
}

/**
 * @properties={typeid:24,uuid:"B20E9B73-CD47-4E22-B1F8-F3403E640A0A"}
 */
function IniciarForm()
{
	vl_descripcion = ''
	vl_filename = ''
	vl_extension = ''
	vl_filepath = ''
	vl_adjunto = ''
	vl_observación = ''	
	vl_size = 0
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"ADAC2075-E131-4A57-8CC4-D3038945C3A6"}
 */
function onActionBuscar(event) 
{
	plugins.file.showFileOpenDialog(mycallbackmethod); 
}

/**
 * @param {String} filename
 *
 * @properties={typeid:24,uuid:"F5C5A826-0F49-4BA0-8AD6-7BD08E9768E6"}
 */
function mycallbackmethod(filename)
{
	if (filename) {
		/**@type {plugins.file.JSFile}*/
	    var datos = filename[0]
	    vl_filename = datos.getName()
	    var normalizedFileName = "";
	    normalizedFileName = utils.stringReplace(datos.getPath(),'\\','/')    //make windows path like unix path
	    vl_filepath = normalizedFileName
	    var a = vl_filename.lastIndexOf(".")
	    vl_extension = vl_filename.substring(a+1)
	    vl_size = datos.size()
	    vl_adjunto = plugins.file.readFile(datos)
	}
}
