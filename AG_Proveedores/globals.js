
/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"C8D47A50-990E-4D33-951B-BD4BAD7C8B5D"}
 */
function onSolutionOpen(arg, queryParams) 
{
	plugins.DateUtils.register( "Litoral Software", "Ym13NcZOW8jx6WSqs1ap68svHE6Jaiu9I/LfY9Dn20t3FW7CFR7gdSAuqRvTMgq/" )
	scopes.globals.InicializaParametros() //Esta en id_parametrosGenerales

    scopes.globals.mx_modulo_nombre = application.getSolutionName() //Nombre que tiene en el administrator.
    scopes.globals.mx_modulo_nivel 	= 0 // Siempre cero.	
    scopes.globals.mx_modulo_id 	= 7 
    scopes.globals.mx_modulo_inicio = ag_solucionvigente.modulo_form_start
		
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
	{
//		forms.vc_frm_inicio.elements.btn_menu1.visible  = true
//		forms.vc_frm_inicio.elements.btn_menu2.visible  = true
//		forms.vc_frm_inicio.elements.btn_menu3.visible  = true
//		forms.vc_frm_inicio.elements.btn_menu4.visible  = true
//		forms.vc_frm_inicio.elements.btn_menu5.visible  = true
//		forms.vc_frm_inicio.elements.btn_menu6.visible  = true
//		forms.vc_frm_inicio.elements.btn_menu7.visible  = true
//		
//		forms.vc_frm_inicio.elements.btn_segmenu1.visible  = false
//		forms.vc_frm_inicio.elements.btn_segmenu2.visible  = false
//		forms.vc_frm_inicio.elements.btn_segmenu3.visible  = false
//		forms.vc_frm_inicio.elements.btn_segmenu4.visible  = false
//		
//
//		forms.vc_frm_inicio.elements.btn_termenu1.visible  = false
//		forms.vc_frm_inicio.elements.btn_termenu2.visible  = false
//		forms.vc_frm_inicio.elements.btn_termenu3.visible  = false
//		forms.vc_frm_inicio.elements.btn_termenu4.visible  = false
//		forms.vc_frm_inicio.elements.btn_termenu5.visible  = false
//
//		scopes.globals.vg_fs_menu=scopes.globals.CargarMenuWeb()
		scopes.globals.CargarMenu()
	}
	else
	{
//		forms.vc_frm_inicio.elements.btn_menu1.visible  = false
//		forms.vc_frm_inicio.elements.btn_menu2.visible  = false
//		forms.vc_frm_inicio.elements.btn_menu3.visible  = false
//		forms.vc_frm_inicio.elements.btn_menu4.visible  = false
//		forms.vc_frm_inicio.elements.btn_menu5.visible  = false
//		forms.vc_frm_inicio.elements.btn_menu6.visible  = false
//		forms.vc_frm_inicio.elements.btn_menu7.visible  = false
//		
//		forms.vc_frm_inicio.elements.btn_segmenu1.visible  = false
//		forms.vc_frm_inicio.elements.btn_segmenu2.visible  = false
//		forms.vc_frm_inicio.elements.btn_segmenu3.visible  = false
//		forms.vc_frm_inicio.elements.btn_segmenu4.visible  = false
//		forms.vc_frm_inicio.elements.btn_segmenu5.visible  = false
//
//		forms.vc_frm_inicio.elements.btn_termenu1.visible  = false
//		forms.vc_frm_inicio.elements.btn_termenu2.visible  = false
//		forms.vc_frm_inicio.elements.btn_termenu3.visible  = false
//		forms.vc_frm_inicio.elements.btn_termenu4.visible  = false
//		forms.vc_frm_inicio.elements.btn_termenu5.visible  = false

		scopes.globals.CargarMenu()
	}
	// TODO Auto-generated method stub
}
