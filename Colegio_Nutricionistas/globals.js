/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"0F56C0F2-1EB4-46EC-BEEE-6BEC634FDE14"}
 */
function onSolutionOpen() 
{
	plugins.DateUtils.register( "Litoral Software", "Ym13NcZOW8jx6WSqs1ap68svHE6Jaiu9I/LfY9Dn20t3FW7CFR7gdSAuqRvTMgq/" )
	globals.InicializaParametros() //Esta en id_parametrosGenerales

	databaseManager.setAutoSave(false)
    globals.mx_modulo_nombre = application.getSolutionName() //Nombre que tiene en el administrator.
    globals.mx_modulo_nivel = 0 // Siempre cero.	
    globals.mx_modulo_id = 14
	globals.mx_modulo_inicio = ag_solucionvigente.modulo_form_start
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
	{
		forms.mat_inicio.elements.titulo_lbl.visible = true
		forms.mat_inicio.elements.btn_menu1.visible  = true
		forms.mat_inicio.elements.btn_menu2.visible  = true
		forms.mat_inicio.elements.btn_menu3.visible  = true
		forms.mat_inicio.elements.btn_menu4.visible  = true
		forms.mat_inicio.elements.btn_menu5.visible  = true
		forms.mat_inicio.elements.btn_menu6.visible  = true
		forms.mat_inicio.elements.btn_menu7.visible  = true
		forms.mat_inicio.elements.btn_submenu1.visible  = false
		forms.mat_inicio.elements.btn_submenu2.visible  = false
		forms.mat_inicio.elements.btn_submenu3.visible  = false
		forms.mat_inicio.elements.btn_submenu4.visible  = false
		forms.mat_inicio.elements.btn_submenu5.visible  = false
		forms.mat_inicio.elements.btn_submenu6.visible  = false
		forms.mat_inicio.elements.btn_submenu7.visible  = false
		forms.mat_inicio.elements.btn_submenu8.visible  = false
		forms.mat_inicio.elements.btn_submenu9.visible  = false
		forms.mat_inicio.elements.btn_submenu10.visible  = false
		forms.mat_inicio.elements.btn_submenu11.visible  = false
		forms.mat_inicio.elements.btn_submenu12.visible  = false
		forms.mat_inicio.elements.btn_form1.visible  = false
		forms.mat_inicio.elements.btn_form2.visible  = false
		forms.mat_inicio.elements.btn_form3.visible  = false
		forms.mat_inicio.elements.btn_form4.visible  = false
		forms.mat_inicio.elements.btn_form5.visible  = false
		forms.mat_inicio.elements.btn_form6.visible  = false
		forms.mat_inicio.elements.btn_form7.visible  = false
		scopes.globals.vg_fs_menu=scopes.globals.CargarMenuWeb()
	}
	else
	{
		forms.mat_inicio.elements.titulo_lbl.visible = false
		forms.mat_inicio.elements.btn_menu1.visible  = false
		forms.mat_inicio.elements.btn_menu2.visible  = false
		forms.mat_inicio.elements.btn_menu3.visible  = false
		forms.mat_inicio.elements.btn_menu4.visible  = false
		forms.mat_inicio.elements.btn_menu5.visible  = false
		forms.mat_inicio.elements.btn_menu6.visible  = false
		forms.mat_inicio.elements.btn_menu7.visible  = false
		forms.mat_inicio.elements.btn_submenu1.visible  = false
		forms.mat_inicio.elements.btn_submenu2.visible  = false
		forms.mat_inicio.elements.btn_submenu3.visible  = false
		forms.mat_inicio.elements.btn_submenu4.visible  = false
		forms.mat_inicio.elements.btn_submenu5.visible  = false
		forms.mat_inicio.elements.btn_submenu6.visible  = false
		forms.mat_inicio.elements.btn_submenu7.visible  = false
		forms.mat_inicio.elements.btn_submenu8.visible  = false
		forms.mat_inicio.elements.btn_submenu9.visible  = false
		forms.mat_inicio.elements.btn_submenu10.visible  = false
		forms.mat_inicio.elements.btn_submenu11.visible  = false
		forms.mat_inicio.elements.btn_submenu12.visible  = false
		forms.mat_inicio.elements.btn_form1.visible  = false
		forms.mat_inicio.elements.btn_form2.visible  = false
		forms.mat_inicio.elements.btn_form3.visible  = false
		forms.mat_inicio.elements.btn_form4.visible  = false
		forms.mat_inicio.elements.btn_form5.visible  = false
		forms.mat_inicio.elements.btn_form6.visible  = false
		forms.mat_inicio.elements.btn_form7.visible  = false
		
		scopes.globals.CargarMenu()
	}
	//plugins.busy.unblock();
}

