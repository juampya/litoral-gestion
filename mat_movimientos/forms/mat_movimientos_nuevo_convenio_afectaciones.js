/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4DE36690-0959-44A7-AAFD-4796973E1193"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	controller.find()
	mov_estado=0
	mat_id = forms.mat_movimientos_nuevo_convenio.vl_matriculado
	controller.search()
}
