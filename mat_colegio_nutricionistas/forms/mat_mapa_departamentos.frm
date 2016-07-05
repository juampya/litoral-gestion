dataSource:"db:/sistemas/departamentos",
items:[
{
formIndex:5,
horizontalAlignment:0,
labelFor:"depar_id",
location:"5,39",
size:"71,20",
styleClass:"table_label",
text:"Código",
typeid:7,
uuid:"117049E7-717F-43E8-8477-6B4ACAE4F786"
},
{
anchors:11,
location:"0,0",
size:"650,29",
styleClass:"sub_banner",
text:"Cantidad de Matriculados Activos por Departamentos por:",
transparent:true,
typeid:7,
uuid:"26AFC38A-1D13-453D-B95B-681EFCCD5F00"
},
{
height:34,
partType:1,
typeid:19,
uuid:"3A7D9203-0FBB-45C9-9C01-F7ACB086D6DB"
},
{
formIndex:9,
horizontalAlignment:0,
labelFor:"depar_descripcion",
location:"77,39",
size:"402,20",
styleClass:"table_label",
text:"Descripción",
typeid:7,
uuid:"47D38C4F-B454-489F-8A8C-4282D9021DD4"
},
{
dataProviderID:"depar_id",
editable:false,
formIndex:6,
horizontalAlignment:0,
location:"5,57",
name:"depar_id",
size:"71,20",
typeid:4,
uuid:"5215FEDF-0516-4421-B1FB-A085BE3732E0"
},
{
dataProviderID:"calc_cant_profesionales",
editable:false,
formIndex:12,
horizontalAlignment:0,
location:"480,57",
name:"calc_cant_profesionales",
size:"78,20",
typeid:4,
uuid:"87D051A7-9821-4B19-9115-F2DF1964E6A7"
},
{
dataProviderID:"vl_direccion_real_profesional",
displayType:2,
editable:false,
formIndex:14,
location:"459,3",
name:"vl_direccion_real_profesional",
onDataChangeMethodID:"961F9978-A52E-4273-B199-0E44C02BB9D1",
size:"185,20",
typeid:4,
uuid:"99D3E6A5-B43F-4828-86D4-4BA840664817",
valuelistID:"1B6EC1E9-CC18-4B02-9B6F-BF352E2D4DFC"
},
{
formIndex:11,
labelFor:"calc_cant_profesionales",
location:"480,39",
name:"calc_cant_profesionales_label",
size:"78,20",
styleClass:"table_label",
text:"Cantidad",
typeid:7,
uuid:"9EDC3951-FB83-47A6-95AB-EC4160AA9E26"
},
{
dataProviderID:"depar_descripcion",
editable:false,
formIndex:10,
location:"77,57",
name:"depar_descripcion",
size:"402,20",
typeid:4,
uuid:"C89690DF-08F2-47A8-ACF8-087F8146B2D3"
},
{
height:262,
partType:5,
typeid:19,
uuid:"D6B9F4A2-DB9F-4D70-849C-A2E8C2826491"
}
],
name:"mat_mapa_departamentos",
namedFoundSet:"separate",
navigatorID:"-1",
onRecordSelectionMethodID:"EE64D9BE-DAB7-4C1D-88CA-5EE865F73642",
onShowMethodID:"018441FC-C69B-4945-8874-BC698BBCD4FB",
showInMenu:true,
size:"650,262",
styleClass:"table",
styleName:"id_style",
typeid:3,
uuid:"18D41CAD-85A1-4EC9-9D56-D3FCA0396B40",
view:3