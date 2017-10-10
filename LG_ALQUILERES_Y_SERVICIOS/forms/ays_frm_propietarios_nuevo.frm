dataSource:"db:/sistemas/alqyser_propietarios",
extendsID:"-1",
items:[
{
dataProviderID:"alqyser_propietarios_to_localidades.localidades_to_departamentos.depar_descripcion",
displayType:10,
editable:false,
formIndex:33,
location:"128,218",
size:"160,20",
styleClass:"disable",
typeid:4,
uuid:"02DD038E-2644-4000-A230-2C4CBCBA10DA",
valuelistID:"5D57F02C-E6E9-435F-BE85-C5087CDF4A98"
},
{
formIndex:4,
horizontalAlignment:4,
location:"205,284",
size:"75,20",
styleClass:"label_border",
text:"Número:",
transparent:true,
typeid:7,
uuid:"03CCB9B2-9948-48A3-83A7-5C54228E797F"
},
{
dataProviderID:"propietario_observa",
displayType:1,
formIndex:15,
location:"482,129",
scrollbars:32,
size:"457,153",
typeid:4,
uuid:"0BCCE3EF-3E57-4513-AD32-5FFBF6476BBC"
},
{
formIndex:3,
horizontalAlignment:0,
imageMediaID:"B59F00BB-DE87-490B-92E9-55F93601EEA5",
location:"5,37",
mediaOptions:1,
name:"btn_volver",
onActionMethodID:"F0E5CB2D-DDD1-45D7-BD12-59943B959AE2",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Volver",
typeid:7,
uuid:"1CEDA47D-268F-4279-BC76-C189FAA88467"
},
{
formIndex:32,
horizontalAlignment:4,
location:"15,218",
size:"108,20",
styleClass:"label_border",
text:"Departamento:",
transparent:true,
typeid:7,
uuid:"2C3BD0B7-1757-42AF-8EA6-F005392E79CB"
},
{
anchors:15,
formIndex:34,
items:[
{
containsFormID:"A5260A2E-DE91-4929-A103-EFF2BD2EBD7E",
location:"36,359",
relationName:"alqyser_propietarios_to_alqyser_inmuebles",
text:"Inmuebles",
typeid:15,
uuid:"98D4367B-8695-454C-9CAE-9B6C995C3552"
},
{
containsFormID:"4BFD86F1-81E9-4D22-8033-73391F08F3CD",
location:"307,443",
text:"Adjuntos",
typeid:15,
uuid:"D11DB85E-FD30-43FD-931F-AF77B1583C67"
},
{
containsFormID:"CF294654-FA41-4DE2-B465-ACDA80881CC8",
location:"122,389",
relationName:"alqyser_propietarios_to_alqyser_contratos",
text:"Hitorial de Contratos",
typeid:15,
uuid:"F3B57180-D846-42A9-8946-3B9BBE7B95B6"
}
],
location:"0,331",
name:"tabs",
printable:false,
size:"1001,238",
transparent:true,
typeid:16,
uuid:"318FD0E5-E11D-4C52-B0E6-3DDC494FF7BA"
},
{
formIndex:4,
horizontalAlignment:4,
location:"15,240",
size:"108,20",
styleClass:"label_border",
text:"Teléfonos:",
transparent:true,
typeid:7,
uuid:"31DCF16E-2A2B-44D0-BCA3-840DA008D904"
},
{
dataProviderID:"alqyser_propietarios_to_localidades.localidades_to_departamentos.departamentos_to_provincias.provincia_nombre",
displayType:10,
editable:false,
formIndex:33,
location:"303,218",
size:"169,20",
styleClass:"disable",
typeid:4,
uuid:"39535C15-340E-450C-8507-BA47AE4A2155",
valuelistID:"5D57F02C-E6E9-435F-BE85-C5087CDF4A98"
},
{
formIndex:2,
horizontalAlignment:0,
imageMediaID:"5C432BE9-5CB5-48FB-A4BE-25A25C33D471",
location:"140,37",
mediaOptions:1,
name:"btn_grabar",
onActionMethodID:"829E3FB1-CCCD-4E77-916A-556B11D1DF73",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Grabar",
typeid:7,
uuid:"4277F311-2B8D-48C7-B764-EAC3D9D4AC40"
},
{
dataProviderID:"propietario_email",
format:"|U",
location:"128,262",
size:"344,20",
text:"Nombre",
typeid:4,
uuid:"4BB236C9-42CB-4B7E-A35D-E71CA6F8B3B0"
},
{
height:569,
partType:5,
typeid:19,
uuid:"4DFD8E31-BF9E-474F-BDC3-9BFD16F9AA8E"
},
{
formIndex:16,
horizontalAlignment:0,
location:"15,106",
size:"457,20",
styleClass:"label_black",
text:"DATOS PRINCIPALES",
typeid:7,
uuid:"531985CA-0E4B-4CA5-BC62-898CD6368972"
},
{
dataProviderID:"propietario_domicilio",
format:"|U",
location:"128,174",
size:"344,20",
text:"Nombre",
typeid:4,
uuid:"5795C3AA-7956-4613-A725-8359BE73F421"
},
{
height:86,
partType:1,
typeid:19,
uuid:"584B2CD5-201E-4EDF-9105-B07F40C092AC"
},
{
formIndex:4,
horizontalAlignment:4,
location:"15,284",
size:"108,20",
styleClass:"label_border",
text:"Tipo Doc.:",
transparent:true,
typeid:7,
uuid:"594BB159-C700-4356-9C1D-5BF7DA8DA1FE"
},
{
formIndex:12,
horizontalAlignment:4,
location:"15,174",
size:"108,20",
styleClass:"label_border",
text:"Domicilio:",
transparent:true,
typeid:7,
uuid:"5A5FD3CD-D16A-4FF9-B158-34C028DEFC88"
},
{
dataProviderID:"propietario_nro_docu",
location:"283,284",
size:"131,20",
text:"Domicilio",
typeid:4,
uuid:"6B58375D-906E-4E99-AFA1-720D0F6F497A"
},
{
dataProviderID:"iva_id",
displayType:2,
editable:false,
location:"128,306",
size:"286,20",
text:"Domicilio",
typeid:4,
uuid:"703D5BF0-5C3F-4955-BB67-FB83C9286B00",
valuelistID:"159C97EB-F14D-4085-84F7-22C87C2FBCDA"
},
{
dataProviderID:"propietario_tel2",
location:"242,240",
size:"113,20",
text:"Domicilio",
typeid:4,
uuid:"7374B0A7-C9AC-43EB-9830-7D4F19A39F9B"
},
{
formIndex:2,
horizontalAlignment:0,
imageMediaID:"492E6F14-8334-48EB-8565-73505985E0B1",
location:"275,37",
mediaOptions:1,
name:"btn_borrar",
onActionMethodID:"595A1D2C-513F-4020-9572-736AAD168808",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Borrar",
typeid:7,
uuid:"88DF5872-7C6E-435B-9447-913094918A72"
},
{
dataProviderID:"propietario_tel1",
location:"128,240",
size:"113,20",
text:"Domicilio",
typeid:4,
uuid:"A231F6CC-C568-4725-B3A5-55A463C17EA8"
},
{
formIndex:32,
horizontalAlignment:4,
location:"15,196",
size:"108,20",
styleClass:"label_border",
text:"Localidad:",
transparent:true,
typeid:7,
uuid:"A2F8D9FA-0B78-4083-A06E-FABCD4D7C2FE"
},
{
formIndex:12,
horizontalAlignment:4,
location:"15,152",
size:"108,20",
styleClass:"label_border",
text:"Nombre:",
transparent:true,
typeid:7,
uuid:"AD065F79-B156-4381-99AD-A2F5555E9E1C"
},
{
formIndex:12,
horizontalAlignment:4,
location:"15,130",
size:"108,20",
styleClass:"label_border",
text:"ID:",
transparent:true,
typeid:7,
uuid:"AE67756B-C103-416F-AD1C-E5D4C51C8D6B"
},
{
formIndex:12,
horizontalAlignment:4,
location:"15,262",
size:"108,20",
styleClass:"label_border",
text:"Email:",
transparent:true,
typeid:7,
uuid:"B288FA9E-807A-4D7A-9168-DF4EBEDD44D4"
},
{
dataProviderID:"docu_id",
displayType:2,
editable:false,
location:"128,284",
size:"73,20",
text:"Domicilio",
typeid:4,
uuid:"B8873BBC-149D-44B8-B199-578A0101473E",
valuelistID:"6FB42780-9413-495F-9460-BBEF434677ED"
},
{
dataProviderID:"propietario_tel3",
location:"357,240",
size:"115,20",
text:"Domicilio",
typeid:4,
uuid:"BA85CDC4-A0F8-4A41-BD7D-8CBA709F98D9"
},
{
dataProviderID:"propietario_id",
editable:false,
horizontalAlignment:0,
location:"128,130",
size:"86,20",
styleClass:"disable",
text:"Código",
typeid:4,
uuid:"D1042A5C-B9BF-45B5-A53A-C0422DF11549"
},
{
anchors:11,
location:"0,0",
size:"1001,80",
styleClass:"banner",
text:"Ficha del Propietario",
typeid:7,
uuid:"EC6F677E-CA59-4A72-94C2-83AA39CBF2AB"
},
{
formIndex:16,
horizontalAlignment:0,
location:"482,106",
size:"457,20",
styleClass:"label_black",
text:"OBSERVACIONES ",
typeid:7,
uuid:"F5511CDA-AE63-4BD2-B198-A973B50F856F"
},
{
formIndex:4,
horizontalAlignment:4,
location:"15,306",
size:"108,20",
styleClass:"label_border",
text:"Categoria  IVA:",
transparent:true,
typeid:7,
uuid:"F55EBC23-36FB-4301-8D8A-B29496845C05"
},
{
dataProviderID:"propietario_nombre",
format:"|U",
location:"128,152",
size:"344,20",
text:"Nombre",
typeid:4,
uuid:"F7D17BCE-8AE6-4CF8-9238-BBE2AED93BD4"
},
{
dataProviderID:"localidad_id",
displayType:10,
formIndex:33,
location:"128,196",
size:"344,20",
typeid:4,
uuid:"FBC3D573-DFA9-4C79-8753-E0E6CAB6E835",
valuelistID:"5D57F02C-E6E9-435F-BE85-C5087CDF4A98"
}
],
name:"ays_frm_propietarios_nuevo",
navigatorID:"-1",
onShowMethodID:"6718DC6C-EDCC-4E40-A26B-7700AD4F9816",
showInMenu:true,
size:"1001,569",
styleClass:"formulario",
styleName:"id_style",
typeid:3,
uuid:"6FFB2E42-E002-4008-95F4-D750BDE09272",
view:0