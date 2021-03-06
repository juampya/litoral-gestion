dataSource:"db:/sistemas/localidades",
initialSort:"localidad_cod_postal asc",
items:[
{
formIndex:1,
horizontalAlignment:2,
imageMediaID:"215F84EA-D58C-4A1C-9C79-A197FBA32FAE",
location:"224,37",
mediaOptions:1,
onActionMethodID:"654A6B9F-65F5-457F-B779-52B9750DD02E",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"105,30",
tabSeq:-2,
text:"Refrescar",
typeid:7,
uuid:"015B8E1F-9C41-458E-8862-499B159FD7E9"
},
{
dataProviderID:"localidades_to_departamentos.depar_descripcion",
editable:false,
formIndex:10,
location:"422,171",
name:"departamento_nombre",
size:"172,20",
tabSeq:-2,
typeid:4,
uuid:"12808F71-C14F-4E06-A4D3-2A4544C2A575"
},
{
formIndex:21,
horizontalAlignment:0,
location:"339,84",
size:"157,20",
styleClass:"label_black",
text:"Departamento",
typeid:7,
uuid:"227B80BB-08DC-49DE-A105-27C1A687BB24"
},
{
dataProviderID:"aggr_cant_reg",
editable:false,
formIndex:22,
horizontalAlignment:4,
location:"706,101",
name:"aggr_cant_reg",
onDataChangeMethodID:"E5435ED3-6FEB-4DA4-A4BA-7886C69D7A5D",
size:"59,20",
styleClass:"disable",
tabSeq:-2,
typeid:4,
uuid:"4B03FF61-6246-4C97-BC54-D5300C550F65"
},
{
dataProviderID:"localidad_id",
editable:false,
formIndex:6,
horizontalAlignment:0,
location:"25,171",
name:"localidad_id",
size:"51,20",
tabSeq:-2,
typeid:4,
uuid:"5324DFBF-1E9B-4EBB-87E0-19894F84A8EC"
},
{
dataProviderID:"vl_departamento_id",
displayType:10,
formIndex:22,
location:"339,104",
name:"vl_departamento",
onDataChangeMethodID:"E5435ED3-6FEB-4DA4-A4BA-7886C69D7A5D",
selectOnEnter:true,
size:"157,20",
tabSeq:-2,
typeid:4,
uuid:"5355095C-3676-42B5-9C04-365934196B44",
valuelistID:"005E9D24-B0A7-440A-A8D1-3B3B902D82B8"
},
{
dataProviderID:"vl_provincia_id",
displayType:10,
formIndex:22,
location:"501,104",
name:"vl_provincia",
onDataChangeMethodID:"E5435ED3-6FEB-4DA4-A4BA-7886C69D7A5D",
selectOnEnter:true,
size:"157,20",
tabSeq:-2,
typeid:4,
uuid:"6BD3BEEE-84A5-44F1-9B5A-DE6205343395",
valuelistID:"D084718F-0E05-48D4-BD14-75D495473A69"
},
{
formIndex:9,
horizontalAlignment:0,
labelFor:"localidad_nombre",
location:"142,153",
size:"279,20",
styleClass:"table_label",
text:"Descripción",
typeid:7,
uuid:"7F006B1B-AD36-4B4B-B0E5-E4E629969183"
},
{
dataProviderID:"localidad_nombre",
editable:false,
formIndex:10,
location:"142,171",
name:"localidad_nombre",
size:"279,20",
tabSeq:-2,
typeid:4,
uuid:"884B27F9-AD89-4C85-87A2-3FF00AE9F1AB"
},
{
formIndex:21,
horizontalAlignment:0,
location:"501,84",
size:"157,20",
styleClass:"label_black",
text:"Provincia",
typeid:7,
uuid:"9439928B-5BBC-4FBF-A32B-D967914DF03B"
},
{
dataProviderID:"vl_localidad",
formIndex:24,
location:"10,104",
name:"vl_localidad",
onDataChangeMethodID:"E5435ED3-6FEB-4DA4-A4BA-7886C69D7A5D",
selectOnEnter:true,
size:"249,20",
tabSeq:-2,
typeid:4,
uuid:"AE06787B-9A55-47EA-A0D5-364438E3F8BD"
},
{
dataProviderID:"localidad_cod_postal",
editable:false,
formIndex:6,
horizontalAlignment:0,
location:"77,171",
name:"localidad_cod_postal",
size:"65,20",
tabSeq:-2,
typeid:4,
uuid:"AEDB3D64-3030-4FAC-8EE0-E9A652F22130"
},
{
borderType:"EmptyBorder,0,0,0,0",
formIndex:4,
imageMediaID:"0E4EAC8B-534A-4773-A300-0556D9E21A1A",
location:"0,171",
mediaOptions:6,
onActionMethodID:"232DBE5D-390E-4D1A-B904-76E1D1F5366A",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
showClick:false,
size:"20,20",
tabSeq:-2,
transparent:true,
typeid:7,
uuid:"AF1F5127-DD82-412A-81EC-68A0EC710E5E"
},
{
formIndex:21,
horizontalAlignment:0,
location:"264,84",
size:"70,20",
styleClass:"label_black",
text:"Cód.Postal",
typeid:7,
uuid:"B26F3FDE-07F2-497F-94BA-F42FF9DD9961"
},
{
dataProviderID:"vl_codigo_postal",
formIndex:22,
horizontalAlignment:0,
location:"264,104",
name:"vl_codigo_postal",
onDataChangeMethodID:"E5435ED3-6FEB-4DA4-A4BA-7886C69D7A5D",
selectOnEnter:true,
size:"70,20",
tabSeq:-2,
typeid:4,
uuid:"B772A51D-8AA5-4FE8-94F9-8C1232E63015"
},
{
height:136,
partType:1,
typeid:19,
uuid:"BAE75272-D41D-445D-9C35-C1E1AE7E43CD"
},
{
formIndex:9,
horizontalAlignment:0,
labelFor:"departamento_nombre",
location:"422,153",
size:"172,20",
styleClass:"table_label",
text:"Departamento",
typeid:7,
uuid:"BE4EE8F8-C3DA-4B38-BF32-B675E98B133E"
},
{
height:480,
partType:5,
typeid:19,
uuid:"BF83C548-85D1-4986-B077-93D2FCFA2F48"
},
{
formIndex:5,
horizontalAlignment:0,
labelFor:"localidad_id",
location:"24,153",
size:"52,20",
styleClass:"table_label",
text:"ID",
typeid:7,
uuid:"C319A27D-AC13-4B37-AC69-3CC06B1137C1"
},
{
dataProviderID:"localidades_to_departamentos.departamentos_to_provincias.provincia_nombre",
editable:false,
formIndex:10,
location:"594,171",
name:"provincia_nombre",
size:"172,20",
tabSeq:-2,
typeid:4,
uuid:"CC3EE999-6433-4C3E-B13E-A2956AE83D8C"
},
{
formIndex:2,
horizontalAlignment:2,
imageMediaID:"382776FF-9225-46C5-9AB8-3377B48C7283",
location:"114,37",
mediaOptions:1,
onActionMethodID:"24375434-6047-4A57-86B3-763A58055542",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"105,30",
tabSeq:-2,
text:"Nuevo",
typeid:7,
uuid:"D9333FB0-1E9C-4CCA-BEA8-B9155AEF7AB2"
},
{
anchors:11,
location:"0,0",
size:"770,80",
styleClass:"banner",
text:"Localidades",
transparent:true,
typeid:7,
uuid:"E058648F-3F36-43BD-BD2A-7A04A54B3668"
},
{
formIndex:23,
horizontalAlignment:0,
location:"10,84",
size:"249,20",
styleClass:"label_black",
text:"Localidad",
typeid:7,
uuid:"EA5BF066-3731-48C5-9AB8-A6460606B205"
},
{
formIndex:3,
horizontalAlignment:2,
imageMediaID:"B59F00BB-DE87-490B-92E9-55F93601EEA5",
location:"5,37",
mediaOptions:1,
onActionMethodID:"79AC7C5F-D48E-440B-B44A-E75CA94AC6E0",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"105,30",
tabSeq:-2,
text:"Volver",
typeid:7,
uuid:"EB46A374-9D3F-4D77-96C9-EE0C49DF3D3A"
},
{
formIndex:9,
horizontalAlignment:0,
labelFor:"provincia_nombre",
location:"594,153",
size:"172,20",
styleClass:"table_label",
text:"Provincia",
typeid:7,
uuid:"F5C136E1-FDE6-4F3D-BE7E-2788EECF5335"
},
{
formIndex:5,
horizontalAlignment:0,
labelFor:"localidad_cod_postal",
location:"76,153",
size:"66,20",
styleClass:"table_label",
text:"CP",
typeid:7,
uuid:"FF91BB66-C624-4970-9B59-A8C24DF16E02"
}
],
name:"sm_frm_localidades",
namedFoundSet:"separate",
showInMenu:true,
size:"770,480",
styleClass:"table",
styleName:"id_style",
typeid:3,
uuid:"8130811C-A9C4-48E5-8D83-BDF7FAE43310",
view:3