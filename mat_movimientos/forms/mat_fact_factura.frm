dataSource:"db:/sistemas/mat_fact_mensual_detalle",
items:[
{
dataProviderID:"fact_det_factura_fecha",
displayType:5,
formIndex:10,
format:"dd-MM-yyyy|mask",
horizontalAlignment:0,
location:"114,102",
size:"119,20",
typeid:4,
uuid:"00378816-9FCF-467A-9DD0-04F5ED4A1D3E"
},
{
formIndex:2,
horizontalAlignment:0,
imageMediaID:"B59F00BB-DE87-490B-92E9-55F93601EEA5",
location:"119,296",
mediaOptions:1,
name:"btn_volver",
onActionMethodID:"43A06CA6-70BA-4F48-B7EC-740C373C9900",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Volver",
typeid:7,
uuid:"029ECACC-29CC-4747-B57E-5C3C759497B3"
},
{
formIndex:19,
labelFor:"",
location:"10,64",
size:"100,20",
styleClass:"label_black",
text:"Matriculado:",
typeid:7,
uuid:"077AEC0C-D72B-4A74-A03B-630475F90A67"
},
{
anchors:12,
dataProviderID:"fact_det_factura",
formIndex:18,
format:"U############",
location:"114,126",
size:"148,20",
typeid:4,
uuid:"2778204C-0E63-47FA-9EBB-F8BC25B80EB0"
},
{
formIndex:17,
location:"10,176",
size:"100,20",
styleClass:"label_black",
text:"Observaciones:",
typeid:7,
uuid:"398720B1-5F31-415E-9577-38741D131976"
},
{
formIndex:17,
location:"10,151",
size:"100,20",
styleClass:"label_black",
text:"Importe:",
typeid:7,
uuid:"3B2784B9-76B3-4EF3-84D9-0E31017DA4E5"
},
{
formIndex:9,
location:"10,102",
size:"100,20",
styleClass:"label_black",
text:"Fecha:",
typeid:7,
uuid:"49B355A9-2FC7-46A5-AFB8-F13D8B046A3D"
},
{
dataProviderID:"fact_det_importe",
formIndex:18,
format:"#,##0.00",
horizontalAlignment:4,
location:"115,151",
size:"147,20",
typeid:4,
uuid:"54778F34-3D22-4097-A079-A2618386D5ED"
},
{
anchors:12,
dataProviderID:"fact_det_observa",
displayType:1,
formIndex:18,
location:"114,176",
scrollbars:32,
size:"285,98",
typeid:4,
uuid:"5D30E0B2-C72B-4C02-9010-5BC7CED76A61",
valuelistID:"5D57F02C-E6E9-435F-BE85-C5087CDF4A98"
},
{
dataProviderID:"fact_det_id",
editable:false,
formIndex:6,
location:"114,41",
size:"51,20",
styleClass:"disable",
typeid:4,
uuid:"88EB222A-7193-458E-8D0D-81FBBD046B38"
},
{
formIndex:5,
location:"10,41",
size:"100,20",
styleClass:"label_black",
text:"Código:",
typeid:7,
uuid:"8D708CC4-4942-4F64-BF3E-9B5B0324C97B"
},
{
anchors:11,
displaysTags:true,
location:"0,0",
size:"496,31",
styleClass:"sub_banner",
text:"%%vl_titulo%% Factura",
transparent:true,
typeid:7,
uuid:"9419C897-FE1C-40CF-BC5A-A873D07D82C9"
},
{
dataProviderID:"mat_id",
formIndex:20,
location:"114,64",
name:"mat_id",
size:"377,20",
typeid:4,
uuid:"A0BA6BC4-E11B-4DB8-A400-D4B74AF12CFA",
valuelistID:"F6D88DD2-B460-48B8-9EC5-BF53D194215F"
},
{
height:342,
partType:5,
typeid:19,
uuid:"AB583211-88D0-4631-81F5-FBA0CB087155"
},
{
formIndex:3,
horizontalAlignment:0,
imageMediaID:"5C432BE9-5CB5-48FB-A4BE-25A25C33D471",
location:"254,296",
mediaOptions:1,
name:"btn_grabar",
onActionMethodID:"3698AC2D-CAD7-4567-94EC-5E2233BB8EA2",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Grabar",
typeid:7,
uuid:"BAB05934-951C-4728-8461-DDBF7287E482"
},
{
formIndex:17,
location:"10,126",
size:"100,20",
styleClass:"label_black",
text:"Número:",
typeid:7,
uuid:"CE55DEFD-F50C-4ECC-A3E2-F5426FF708D2"
},
{
height:31,
partType:1,
typeid:19,
uuid:"CF8341E3-2BC6-4318-BA15-27140941A673"
}
],
name:"mat_fact_factura",
navigatorID:"-1",
onHideMethodID:"F95626BE-76A9-47D3-ABEA-AF143A97C50C",
onShowMethodID:"CEDE9F49-8393-4509-BC96-129B12F1671A",
showInMenu:true,
size:"496,342",
styleClass:"table",
styleName:"id_style",
typeid:3,
uuid:"5C2233A5-0229-49C8-8D24-FBF0F7E7A34C"