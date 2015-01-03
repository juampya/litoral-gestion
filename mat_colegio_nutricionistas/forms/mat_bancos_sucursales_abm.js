/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"9A1AC75E-E705-457C-9CC1-490BF01E38E9"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("bancos_sucursales").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"4420547F-919B-4DBD-ABBD-453B4DF60DB7"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("bancos_sucursales").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"D088DD57-E2A3-4A7C-9412-F42BCCB70452"}
 */
function onShow(firstShow, event) 
{
	//emp_id = scopes.globals.mx_empresa_id
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"50363BF8-A606-4734-A4F6-D54401F923BC"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords()
	return true
}
