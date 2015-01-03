dataSource:"db:/sistemas/mat_rel_mat_cuentas",
items:[
{
labelFor:"",
location:"44,33",
size:"119,20",
styleClass:"label_black",
text:"Medio Pago:",
typeid:7,
uuid:"0C130F26-4DE3-4CC9-A002-CA8EB2005A7D"
},
{
horizontalAlignment:0,
labelFor:"",
location:"44,233",
mnemonic:"",
size:"455,20",
styleClass:"label_black",
text:"Observaciones",
typeid:7,
uuid:"0EE31123-C1B4-409E-B3A8-4AEFB46321DE"
},
{
labelFor:"",
location:"44,208",
size:"119,20",
styleClass:"label_black",
text:"C.U.I.T. del Titular:",
typeid:7,
uuid:"1F59C011-88D3-4D97-AAD8-4AC070E00761"
},
{
dataProviderID:"banco_suc_id",
displayType:10,
location:"168,83",
name:"banco_suc_id",
size:"377,20",
typeid:4,
uuid:"241DF34C-8786-4125-B8EF-842F35289E27",
valuelistID:"AD11565C-B3F4-4C4E-8F3D-F01C3F71BC4A"
},
{
labelFor:"",
location:"44,183",
size:"119,20",
styleClass:"label_black",
text:"Titular:",
typeid:7,
uuid:"400BCB61-7945-4755-8CAD-F4B5961CC9C7"
},
{
dataProviderID:"rel_tipo_cuenta",
displayType:2,
editable:false,
location:"168,133",
name:"rel_tipo_cuenta",
size:"183,20",
typeid:4,
uuid:"4D557121-778D-4B5C-9698-A0D5EA4E8304",
valuelistID:"76781A8C-161A-4993-8FA2-6390DA3EAC89"
},
{
labelFor:"",
location:"44,108",
size:"119,20",
styleClass:"label_black",
text:"Nro. de Cuenta:",
typeid:7,
uuid:"5192A584-D2AD-4EDF-8EE5-C31EF5BE0585"
},
{
dataProviderID:"rel_cbu",
location:"168,158",
name:"rel_cbu",
size:"223,20",
typeid:4,
uuid:"7186BC12-59BB-4D39-B176-535419A50337"
},
{
dataProviderID:"medio_pago_id",
displayType:2,
editable:false,
location:"168,33",
name:"medio_pago_id",
size:"183,20",
typeid:4,
uuid:"760A7DE9-707B-4694-802D-E5DCB65563A8",
valuelistID:"C6D1ACBE-AB30-4F66-AEFD-E88ED9E06054"
},
{
dataProviderID:"rel_nro_cuenta",
location:"168,108",
name:"rel_nro_cuenta",
size:"223,20",
typeid:4,
uuid:"84D67040-579C-434F-80BA-9207FD304221"
},
{
labelFor:"",
location:"44,83",
size:"119,20",
styleClass:"label_black",
text:"Sucursal:",
typeid:7,
uuid:"956F2E6F-B9B9-4130-9D0D-37937C63136F"
},
{
dataProviderID:"rel_cuit_titular",
location:"168,208",
name:"rel_cuit_titular",
onDataChangeMethodID:"63C635D2-239D-4320-B3A6-E329B846C89F",
size:"140,20",
typeid:4,
uuid:"9EB99AC5-61C9-4A68-91EF-10E753E184AA"
},
{
borderType:"EmptyBorder,0,0,0,0",
imageMediaID:"382776FF-9225-46C5-9AB8-3377B48C7283",
location:"545,83",
mediaOptions:1,
onActionMethodID:"8947A7EC-0097-4FB6-969D-FCE9058B665A",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"21,20",
toolTipText:"Agregar Sucursal",
transparent:true,
typeid:7,
uuid:"A00C99B8-4BA5-4DAD-B71A-ADCF2C93920E"
},
{
dataProviderID:"rel_observa",
displayType:1,
location:"44,255",
name:"rel_observa",
scrollbars:32,
size:"455,60",
typeid:4,
uuid:"AFA03D3E-C953-4E00-838B-2059F67672AC"
},
{
height:480,
partType:5,
typeid:19,
uuid:"B8653508-6ED6-4AF7-B363-ADF921ABF0FD"
},
{
labelFor:"",
location:"44,133",
size:"119,20",
styleClass:"label_black",
text:"Tipo de Cuenta:",
typeid:7,
uuid:"D0BEE500-F5D4-4D95-8370-B843CC91C731"
},
{
dataProviderID:"rel_titular",
location:"168,183",
name:"rel_titular",
size:"326,20",
typeid:4,
uuid:"D3FB22A2-977D-445C-B549-DED5CDC82528"
},
{
labelFor:"",
location:"44,58",
size:"119,20",
styleClass:"label_black",
text:"Banco:",
typeid:7,
uuid:"DF4A5CBE-B50B-4DD0-925C-7A3CE864DFE8"
},
{
labelFor:"",
location:"44,158",
size:"119,20",
styleClass:"label_black",
text:"C.B.U.:",
typeid:7,
uuid:"EFBA0730-D6EF-47B7-8D69-52131740AC25"
},
{
dataProviderID:"banco_id",
displayType:10,
location:"168,58",
name:"banco_id",
onDataChangeMethodID:"659E221F-C7E3-4936-80FB-929C8F653248",
size:"377,20",
typeid:4,
uuid:"F3A54376-5BD6-42C5-B857-C15B16C296F2",
valuelistID:"B814FA5E-6511-4796-82C2-264D1F9E84DB"
}
],
name:"sm_frm_matriculados_otros",
navigatorID:"-1",
onShowMethodID:"7D3CE473-4660-4DA0-AD59-D3DDA0D3278C",
showInMenu:true,
size:"568,480",
styleClass:"formulario",
styleName:"id_style",
typeid:3,
uuid:"978B7672-E492-42FE-82FF-472D5AF19250"