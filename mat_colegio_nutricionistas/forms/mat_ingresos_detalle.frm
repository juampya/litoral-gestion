dataSource:"db:/sistemas/mat_ingresos",
items:[
{
anchors:11,
location:"0,0",
size:"640,80",
styleClass:"banner",
text:"Detalle Concepto",
transparent:true,
typeid:7,
uuid:"037E32AF-CF03-4C8F-AEC8-7A794067F6C5"
},
{
imageMediaID:"5C432BE9-5CB5-48FB-A4BE-25A25C33D471",
location:"170,39",
mediaOptions:1,
onActionMethodID:"55CCA076-8B0E-44C9-97D5-AF285C29759D",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Grabar",
typeid:7,
uuid:"069B089F-B85A-4CFA-B174-9CCBB80ADCC9"
},
{
height:371,
partType:5,
typeid:19,
uuid:"0FB43A90-40D8-4246-8859-BBD55CC76C28"
},
{
dataProviderID:"ingr_nombre",
location:"149,91",
size:"297,20",
typeid:4,
uuid:"101D5F0B-C6A4-4BA8-8D0C-A5E7BA4EF95C"
},
{
horizontalAlignment:4,
location:"26,91",
size:"118,20",
styleClass:"label_black",
text:"Nombre:",
typeid:7,
uuid:"234544EC-DA5A-4379-B43D-0922D57CC19E"
},
{
dataProviderID:"ingr_primer_movimiento",
displayType:4,
location:"149,166",
size:"297,20",
text:"Se Agrega en el movimiento de alta",
typeid:4,
uuid:"285492B6-3627-41BA-B980-3A6CD2F9D296"
},
{
horizontalAlignment:4,
location:"26,166",
size:"118,20",
styleClass:"label_black",
text:"Primer Movim.:",
typeid:7,
uuid:"2F85A026-1980-4E0D-B137-C1E3AFBEEA86"
},
{
horizontalAlignment:4,
location:"26,191",
size:"118,20",
styleClass:"label_black",
text:"Observaciones:",
typeid:7,
uuid:"3FA937EC-A41C-419B-8EB8-66B09323DF34"
},
{
horizontalAlignment:0,
labelFor:"ingr_id",
location:"535,91",
name:"ingr_id_label",
size:"64,20",
styleClass:"label_black",
text:"ID",
typeid:7,
uuid:"4962696A-8F51-4DCE-B603-468B9940EE29"
},
{
background:"#ffffa6",
dataProviderID:"ingr_id",
editable:false,
horizontalAlignment:0,
location:"535,111",
name:"ingr_id",
size:"64,20",
text:"Ingr Id",
typeid:4,
uuid:"4D2C6074-3CB7-4D5D-9410-C98676B932BD"
},
{
horizontalAlignment:4,
location:"26,116",
size:"118,20",
styleClass:"label_black",
text:"Importe:",
typeid:7,
uuid:"60453FD4-E667-47F6-84B9-6BFA9AB077A7"
},
{
dataProviderID:"ingr_observaciones",
displayType:1,
location:"149,191",
scrollbars:32,
size:"297,98",
typeid:4,
uuid:"6430F42F-45B3-44DF-9EC0-FF968CA2CB2F"
},
{
horizontalAlignment:4,
location:"21,324",
size:"118,20",
styleClass:"label_black",
text:"Fecha Vto:",
typeid:7,
uuid:"717766E3-065B-4AC9-91F9-C950D5EA01E9",
visible:false
},
{
imageMediaID:"B59F00BB-DE87-490B-92E9-55F93601EEA5",
location:"35,39",
mediaOptions:1,
onActionMethodID:"8210911B-BD93-4153-B55F-93B04C567597",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Volver",
typeid:7,
uuid:"8E10656C-02BA-4E8D-8CF3-AB79B8FDEFE8"
},
{
dataProviderID:"ingr_tipo_asignacion",
displayType:2,
editable:false,
location:"149,141",
size:"214,20",
typeid:4,
uuid:"8E8AC7E0-22CC-49FA-92A5-DD937AAA0B36",
valuelistID:"397116E5-0E3C-4DA3-928E-DDA2AF6F0B48"
},
{
horizontalAlignment:4,
location:"26,141",
size:"118,20",
styleClass:"label_black",
text:"Tipo Asignacion:",
typeid:7,
uuid:"9DC75F0A-E62D-4A2D-BEF2-CCADEB267193"
},
{
horizontalAlignment:4,
location:"294,116",
size:"69,20",
styleClass:"label_black",
text:"Estado:",
typeid:7,
uuid:"A296CFBD-CEFC-463D-AD0C-7E76BEE446EA"
},
{
dataProviderID:"ingr_estado",
displayType:4,
location:"368,116",
name:"ingr_estado",
size:"78,20",
text:"Activo",
typeid:4,
uuid:"B5EFCC11-D2FD-4D7B-B006-538B1C52FA2C"
},
{
imageMediaID:"492E6F14-8334-48EB-8565-73505985E0B1",
location:"305,39",
mediaOptions:1,
onActionMethodID:"07601AC9-8B2A-405B-B7DE-8F2A3D43A075",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Borrar",
typeid:7,
uuid:"C40DEB80-82B2-42F8-BA7E-863A358F4B0D"
},
{
dataProviderID:"ingr_importe",
format:"#,###.00",
horizontalAlignment:4,
location:"149,116",
size:"140,20",
typeid:4,
uuid:"F0DED68D-5E80-4AB0-919F-8D0D5890C301"
},
{
dataProviderID:"ingr_fecha_vto",
displayType:5,
format:"dd-MM-yyyy|mask",
horizontalAlignment:4,
location:"144,324",
size:"140,20",
typeid:4,
uuid:"FD1EFB90-9DF8-4E69-84A1-47CA0B7963B1",
visible:false
},
{
imageMediaID:"513FB1E5-3480-4651-9740-112DC70CC341",
location:"440,39",
mediaOptions:1,
onActionMethodID:"39051DF4-F715-4283-A91D-65801902269E",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"150,30",
text:"Asignacion global",
typeid:7,
uuid:"FFBDA979-A514-4A72-BD4D-6C34C799CAB8"
}
],
name:"mat_ingresos_detalle",
navigatorID:"-1",
onShowMethodID:"-1",
showInMenu:true,
styleClass:"formulario",
styleName:"id_style",
typeid:3,
uuid:"DF583D7A-56F2-4586-9B1B-F8E04D5A14FA"