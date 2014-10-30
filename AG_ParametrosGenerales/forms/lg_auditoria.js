
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"419733DD-2AB6-432A-A2CC-CBAD27357E2D"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	//var ubicacion_btn_x = forms.lg_auditoria.controller.getFormWidth() - 50
	//elements.btn_ver.setLocation(ubicacion_btn_x, 5)
	
	if (globals.vg_auditoria_tabla != null) {
		/**@type {Array} */
		var tmp_filtro_tablas = globals.vg_auditoria_tabla
		/**@type {String} */
		var filtro_tablas = null
		for (var j=0;j < tmp_filtro_tablas.length; j++) {
			filtro_tablas = filtro_tablas + tmp_filtro_tablas[j] + '||'
		}
	}
	
	if (globals.vg_auditoria_campo != null) {
		/**@type {Array} */
		var tmp_filtro_campos = globals.vg_auditoria_campo
		/**@type {String} */
		var filtro_campos = null
		for (var i=0;i < tmp_filtro_campos.length; i++) {
			filtro_campos = filtro_campos + tmp_filtro_campos[i] + '||'
		}
	}
	
	controller.find()
	audit_pk_valor 	= globals.vg_auditoria_pk
	audit_tabla		= filtro_tablas
	if (globals.vg_auditoria_campo != null) {
		audit_campo	= filtro_campos
	}
	controller.search()
}
