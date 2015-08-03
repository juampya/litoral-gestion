/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"A9D19A5F-B186-4AA6-8087-0CA3FD31457D",variableType:93}
 */
var vl_fecha_hasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E2795315-3021-4362-9C5A-BF6BEF67A2AA",variableType:93}
 */
var vl_fecha_desde = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1930D9E4-A3E2-4C43-A9C5-37CA29A445C7",variableType:4}
 */
var vl_usuario = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4884E1C2-7FD7-49E4-9CBD-E213B25C71EC",variableType:4}
 */
var vl_empresa = null;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"16CF8D92-7F62-4977-B0FF-51B798C2002A"}
 */
function onActionVolver(event) 
{
	forms.admin_lg_inicio.controller.show()
}


/**
 * @properties={typeid:24,uuid:"0545B94B-CFE0-46C5-B981-43FCCB05B6A3"}
 * @AllowToRunInFind
 */
function Filtrar() 
{
	controller.find()
	if(vl_empresa!=null) emp_id = vl_empresa
	if(vl_usuario!=null) usu_id = vl_usuario
	mensaje_fecha = utils.dateFormat(vl_fecha_desde, 'yyyy-MM-dd')+' 00:00:00 ... '+utils.dateFormat(vl_fecha_hasta, 'yyyy-MM-dd')+' 23:59:59|yyyy-MM-dd HH:mm:ss'
	controller.search()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BD27F0E2-0850-46D6-B018-40EEE1965E94"}
 */
function onShow(firstShow, event) 
{
	if (firstShow)
	{	
		vl_empresa = ag_usuariovigente.emp_id
		vl_usuario = null
		vl_fecha_desde = application.getServerTimeStamp()
		vl_fecha_hasta = application.getServerTimeStamp()
	}	
}
