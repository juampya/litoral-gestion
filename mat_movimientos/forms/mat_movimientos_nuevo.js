/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4BBC8C29-572E-4560-A19B-490D75641593",variableType:4}
 */
var vl_matriculado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D63AFD4A-BB06-42E1-868A-7EB73FCC683E",variableType:4}
 */
var vl_tipo_movim = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"90217FA9-B2F5-4053-B2F1-109BEA2D91B8",variableType:4}
 */
var vl_mes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4174CC4B-9FE2-4BF9-86FB-D4FB8E4F73C6",variableType:4}
 */
var vl_anio = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6453BDF3-49C5-4D50-8978-A75E3D66F1FE"}
 */
function onActionVolver(event) 
{
	vl_anio = null
	vl_matriculado = null
	vl_mes = null
	vl_tipo_movim = null
	application.getWindow('nuevoMovim').hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8F717FFB-A25B-4F1A-A5F7-5591030381AF"}
 */
function onActionGrabar(event) 
{
	grabarMovimiento()
}

/**
 * @properties={typeid:24,uuid:"C5736623-3FAB-4450-BCD6-A5C031FC4E4F"}
 */
function grabarMovimiento()
{
	if(vl_matriculado == 0 || vl_matriculado == null)
	{
		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","Debe seleccionar un Matriculado",'atention',controller.getName(),"Aceptar",null,null,null,null,null,null,null)
		return
	}
	switch (vl_tipo_movim) 
	{
	case 0:
		if(!globals.existeMovimiento(vl_mes,vl_anio,vl_matriculado,null,null))
		{	
			globals.generar_cuotas_mensuales_confirmadas(vl_mes,vl_anio,vl_matriculado)
			application.getWindow('nuevoMovim').hide()
		}
		else
		{
			globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","Ya Existe un movimiento con los mismos Parametros",'atention',controller.getName(),"Aceptar",null,null,null,null,null,null,null)
		}
	break;
	case 1:
		if(!globals.existeMovimiento(vl_mes,vl_anio,vl_matriculado,null,null))
		{		
			globals.grabarPrimerMovimiento(vl_matriculado,vl_mes,vl_anio)
			application.getWindow('nuevoMovim').hide()
		}
		else
		{
			globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","Ya Existe un movimiento con los mismos Parametros",'atention',controller.getName(),"Aceptar",null,null,null,null,null,null,null)		
		}
	break;
	case 2:
	
			application.getWindow('nuevoMovim').hide()
			forms.mat_movimientos_nuevo_manual.controller.show()
	break;		
	default:
		break;
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5FFA870C-6FA6-4A20-945B-550BD8ABE5C3"}
 */
function onShow(firstShow, event) 
{
	vl_anio = application.getServerTimeStamp().getFullYear()
	vl_matriculado = null
	vl_mes = application.getServerTimeStamp().getMonth() + 1
	vl_tipo_movim = 0
}
