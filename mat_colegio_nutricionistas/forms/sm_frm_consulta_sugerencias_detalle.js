/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"84CE8DD9-F515-4B7A-89B8-BD1979794228",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B3C65AEA-2403-4079-B0F2-F3DA28348661"}
 */
var vl_titulo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E3D0957D-ED62-4D12-884D-E9B88087A4D1"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"8E5FF790-8107-4FAB-8C84-B003B196951A"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"C3D5E355-5A4E-4E05-A6B9-E7E0443C3297"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("dialog").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"814DB4A8-8C4A-45D8-991C-36286BE1795B"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("dialog").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"83115583-3615-4B60-BF51-A6E12D62BD6E"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords()
	return true
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"DDDC1E3E-A4A9-4A87-9D92-A517A66F6D42"}
 * @AllowToRunInFind
 */
function onActionImprimir(event) 
{
	//scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','Seleccione la opción que desea Imprimir.','question',controller.getName(),'Original','ImprimirOriginal','Copia p/Archivo','ImprimirCopia',null,null,null,null)
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"6594CB98-13FA-447F-B21F-C5F9D2814293"}
 */
function ImprimirOriginal()
{
	Imprimir(1)
}

/**
 * @properties={typeid:24,uuid:"2A38493D-1096-48F8-967D-094B19593BE0"}
 */
function ImprimirCopia()
{
	Imprimir(2)
}

/**
 * @AllowToRunInFind
 * @param {Number} pcopia
 * @properties={typeid:24,uuid:"83580094-DF25-4F92-AA39-C01DEFA83C2A"}
 */
function Imprimir(pcopia)
{
//	var nom_reporte = null
//	var varm_ente   = null
//	var tmp_presidente = null
//	var tmp_vicepresidente = null
//	var tmp_secretario = null
	
//	/** @type {JSFoundset<db:/sistemas/mat_matriculados>}*/
//	var fs_matriculados = databaseManager.getFoundSet('Sistemas','mat_matriculados')
//		fs_matriculados.find()
//		fs_matriculados.mat_consejo_id = [1,2,3]
//		fs_matriculados.search()
//	
//	for (var i = 1; i <= fs_matriculados.getSize(); i++) 
//	{
//		var record = fs_matriculados.getRecord(i)
//		
//		if(record.mat_matriculados_to_mat_consejo.consejo_utiliza_firma==1)
//		{
//			switch (record.mat_consejo_id) 
//			{
//				case 1:
//					tmp_presidente = "Lic. "+record.mat_nombre
//				break;
//				case 2:
//					tmp_vicepresidente = "Lic. "+record.mat_nombre
//				break;
//				case 3:
//					tmp_secretario = "Lic. "+record.mat_nombre
//				break;
//			}
//		}	
//	}	

	//plugins.jasperPluginRMI.runReport('sistemas',nom_reporte ,null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pmatriculado:mat_id, pente:varm_ente, ppresidente:tmp_presidente, pvicepresidente:tmp_vicepresidente, psecretario:tmp_secretario, psolicitud_id:rel_id.toString(), ncopia:pcopia})
}

/**
 * @properties={typeid:24,uuid:"18CFD173-4757-49AF-8D1B-934D666D7D32"}
 */
function onActionBorrar() 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', "Desea Borrar el Registro.", 'info', controller.getName(), 'No',null,"Si","borrarRegistro", null, null, null, null) 
}

/**
 * @properties={typeid:24,uuid:"8ECC433B-D209-412D-BB94-DC653CC22B21"}
 */
function borrarRegistro()
{
	controller.deleteRecord()
	application.getWindow("dialog").hide()
}
