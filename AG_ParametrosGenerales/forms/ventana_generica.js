/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4E3BA2F6-E4B1-47FF-AA32-46C459A497CD"}
 */
var vg_boton1 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"768D54B7-D997-4472-853F-A249D5AF8694"}
 */
var vg_boton2 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9E67B847-48B4-4E85-9038-9DE3D35EF80C"}
 */
var vg_boton3 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5227257A-B4A7-43EE-99C7-3A8A873BDBB7"}
 */
var vg_boton4 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6571EBC2-AED5-4B4E-9FA4-F7B7929757B7"}
 */
var vg_form = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C4005FBB-324C-456C-B1EC-86FBB85E4D08"}
 */
var vg_icono = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E0B7A8F0-9325-45D0-88C5-4F2163E55E2A"}
 */
var vg_mensaje = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7FC74D00-C6AD-41B6-9EEA-698CEC4705D2"}
 */
var vg_metodo1 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EF153912-3529-4041-8B56-C5DAC0A06A32"}
 */
var vg_metodo2 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BA22B52D-6A89-4C46-AE14-A087D603064F"}
 */
var vg_metodo3 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EF127765-9D2D-499C-86B1-9299AA83C9B3"}
 */
var vg_metodo4 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6E0F8FE5-C8CB-460C-987E-1D25ABCAA8A5"}
 */
var vg_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"000E9C92-B444-4DA3-9B8C-51DBA50D396D",variableType:4}
 */
var vg_usuario = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E0CF0BCA-09BA-4AB7-94BF-A0B194272BF8",variableType:4}
 */
var vl_btn1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FE491C45-31FF-418A-8845-68831985D767",variableType:4}
 */
var vl_btn2 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A48E2A6A-8497-4AF0-B3A6-A5D5DF6CD7D0",variableType:4}
 */
var vl_btn3 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3EEA5E05-D464-4931-AC8A-5E60FE051B60",variableType:4}
 */
var vl_btn4 = 0;

/**
 * @properties={typeid:24,uuid:"93E98D32-4C81-4D9B-BD1A-11B318DC197E"}
 */
function close()
{

	//close the form in dialog
	application.getWindow('ventanaGenerica').hide()
	//execute the method to be executed, then clear the global
	
	if((vl_btn1) && (forms[vg_form][vg_metodo1]))
	{
		forms[vg_form][vg_metodo1]()
		vg_metodo1 = null
	 }
	
	if((vl_btn2) &&(forms[vg_form][vg_metodo2]))
	{
		forms[vg_form][vg_metodo2]()
		vg_metodo2 = null
	 }
	
	if((vl_btn3) && (forms[vg_form][vg_metodo3]))
	{
		forms[vg_form][vg_metodo3]()
		vg_metodo3 = null
	 }
	
	if((vl_btn4) && (forms[vg_form][vg_metodo4]))
	{
		forms[vg_form][vg_metodo4]()
		vg_metodo4 = null
	}
	
	
}

/**
 * @properties={typeid:24,uuid:"9D5CD93A-B5D0-4058-9D92-798C3786A421"}
 */
function hide_allIcons()
{
	elements.icn_error.visible = false
	elements.icn_forbidden.visible = false
	elements.icn_info.visible = false
	elements.icn_question.visible = false
	elements.icn_warning.visible = false
}

/**
 * @properties={typeid:24,uuid:"F1C4A340-0B15-4B18-A4CF-F140D10F3A18"}
 * @param {String} btn1
 * @param {String} btn2
 * @param {String} btn3
 * @param {String} btn4
 */
function setear_botones(btn1,btn2,btn3,btn4)
{
//	var btn1 = arguments[0]
//	var btn2 = arguments[1]
//	var btn3 = arguments[2]
//	var btn4 = arguments[3]

	if(btn1 != undefined)
	{
		elements.btn_1.text = btn1
	}
	else
	{
		elements.btn_1.text = 'OK'
	}

	if(btn2 != undefined)
	{
		elements.btn_2.visible = true
		elements.btn_2.text = btn2
	}
	else
	{
		elements.btn_2.visible = false
	}

	if(btn3 != undefined)
	{
		elements.btn_3.visible = true
		elements.btn_3.text = btn3
	}
	else
	{
		elements.btn_3.visible = false
	}

	if(btn4 != undefined)
	{
		elements.btn_4.visible = true
		elements.btn_4.text = btn4
	}
	else
	{
		elements.btn_4.visible = false
	}
}

/**
 * @properties={typeid:24,uuid:"B135E29D-191A-401A-A928-2D0D57DBC2E4"}
 */
function show_iconError()
{
	elements.icn_error.visible = true
}

/**
 * @properties={typeid:24,uuid:"EC1288AA-0B71-46AD-81EC-6EAFBCF102BC"}
 */
function show_iconForbidden()
{
	elements.icn_forbidden.visible = true
}

/**
 * @properties={typeid:24,uuid:"10522672-B475-4169-938B-8B1781498B9F"}
 */
function show_iconInfo()
{
	elements.icn_info.visible = true
}

/**
 * @properties={typeid:24,uuid:"0FB628D5-A258-45C8-9C5F-DC5B4D71CDBD"}
 */
function show_iconQuestion()
{
	elements.icn_question.visible= true
}

/**
 * @properties={typeid:24,uuid:"9B0C8AF8-625B-478B-8F5B-A54B88C5102B"}
 */
function show_iconWarning()
{
	elements.icn_warning.visible = true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B048C77C-0341-4485-AAF9-385420808080"}
 */
function boton1(event)
{
	vl_btn1=1
	vl_btn2=0
	vl_btn3=0
	vl_btn4=0
	grabarDatos()
	close()
}

/**
 * @properties={typeid:24,uuid:"73544015-DB25-479C-B2AE-A24A4FB266D6"}
 */
function boton2(event)
{
	vl_btn1=0
	vl_btn2=1
	vl_btn3=0
	vl_btn4=0
	grabarDatos()
	close()
}

/**
 * @properties={typeid:24,uuid:"8F18F4C8-192C-45FD-BC5E-A2F0F765D01C"}
 */
function boton3(event)
{
	vl_btn1=0
	vl_btn2=0
	vl_btn3=1
	vl_btn4=0
	grabarDatos()
	close()
}

/**
 * @properties={typeid:24,uuid:"B732C9C5-96FC-4F41-A231-379E0B8AD3EE"}
 */
function boton4(event)
{
	vl_btn1=0
	vl_btn2=0
	vl_btn3=0
	vl_btn4=1
	grabarDatos()
	close()
}

/**
 * @properties={typeid:24,uuid:"1FA75448-BA53-4207-8E8B-21809BF9AD2F"}
 */
function grabarDatos()
{
	if(vg_icono!='info')
	{
		controller.newRecord()
		mensaje_fecha=new Date()
		mensaje_formulario= vg_form
		mensaje_mensaje=vg_mensaje
		usu_id=vg_usuario
		
		if(vg_icono=='error')
			mensaje_tipo=0
		
		if(vg_icono=='question')
			mensaje_tipo=1
		
		if(vg_icono=='warning')
			mensaje_tipo=2
		
		if(vg_icono=='forbidden')
			mensaje_tipo=3
		
		if(vl_btn1==1)
		{
			mensaje_metodo=vg_metodo1
			mensaje_respuesta=vg_boton1
		}
		
		if(vl_btn2==1)
		{
			mensaje_metodo=vg_metodo2
			mensaje_respuesta=vg_boton2
		}
		
		if(vl_btn3==1)
		{
			mensaje_metodo=vg_metodo3
			mensaje_respuesta=vg_boton3
		}
		
		if(vl_btn4==1)
		{
			mensaje_metodo=vg_metodo4
			mensaje_respuesta=vg_boton4
		}
		databaseManager.saveData(foundset.getRecord(1))
	}
	
	
}
