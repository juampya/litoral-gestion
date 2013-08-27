/**
 * @properties={typeid:24,uuid:"AF7FD735-6846-4799-9812-4D9088DB3CB0"}
 */
function Salir()
{
	if(application.isInDeveloper())
	{
		application.exit()
	}
	else
	{
		application.closeSolution('LitoralGestion','InicializaArgento')
	}
}

/**
 * @properties={typeid:24,uuid:"60BAEF5A-AC23-4399-8FD4-D36249064382"}
 */
function Clientes() 
{
	forms.vc_frm_clientes_abm.vl_frm_anterior = controller.getName()
	forms.vc_frm_clientes_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"1E6C766A-A9D5-4ACB-A831-7E0D418774D5"}
 */
function Grupos() 
{
	forms.vc_frm_grupos_abm.vl_frm_anterior = controller.getName()
	forms.vc_frm_grupos_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"61E06BC4-A0AF-46DE-9668-EF56B5BB2EA5"}
 */
function Transportes() 
{
	forms.vc_frm_transportes_abm.vl_frm_anterior = controller.getName()
	forms.vc_frm_transportes_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"95D921DA-15EC-42C7-9C70-8C1350D2BF91"}
 */
function Vendedores() 
{
	forms.vc_frm_vendedores_abm.vl_frm_anterior = controller.getName()
	forms.vc_frm_vendedores_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"A489D488-C744-44AA-9B51-4761E5E91B57"}
 */
function CondicionesVta() 
{
	forms.vc_frm_condicionesvta_abm.vl_frm_anterior = controller.getName()
	forms.vc_frm_condicionesvta_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"944EF660-A09B-44F0-910A-0C99E1E9E1AE"}
 */
function Zonas() 
{
	forms.vc_frm_zonas_abm.vl_frm_anterior = controller.getName()
	forms.vc_frm_zonas_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"97155E65-228C-4829-955D-72DD7B370003"}
 */
function Talonarios() 
{
	forms.vc_frm_talonarios_abm.vl_frm_anterior = controller.getName()
	forms.vc_frm_talonarios_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"AD29BE06-7BC4-4119-8B8E-9FB6926BC153"}
 */
function Parametros() 
{
	forms.vc_frm_parametros.vl_frm_anterior = controller.getName()
	forms.vc_frm_parametros.controller.show()
}
