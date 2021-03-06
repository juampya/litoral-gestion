dataSource:"db:/sistemas/mat_ingresos",
items:[
{
horizontalAlignment:4,
location:"21,164",
size:"118,20",
styleClass:"label_black",
text:"Importe:",
typeid:7,
uuid:"02746B8E-D53D-4ED3-82F9-862B297D9B2B"
},
{
horizontalAlignment:4,
location:"21,134",
size:"118,20",
styleClass:"label_black",
text:"Nombre:",
typeid:7,
uuid:"0AA29C39-F7DB-4078-A835-CFD0F62A7327"
},
{
dataProviderID:"ingr_nombre",
location:"149,134",
size:"297,20",
typeid:4,
uuid:"1BA77D8F-004E-40FF-9D5B-67899E030238"
},
{
horizontalAlignment:4,
location:"21,253",
size:"118,20",
styleClass:"label_black",
text:"Fecha Vto:",
typeid:7,
uuid:"2C1DBE78-1CEC-49D4-AD5F-FFE489868216",
visible:false
},
{
horizontalAlignment:4,
location:"21,223",
size:"118,20",
styleClass:"label_black",
text:"Primer Movim.:",
typeid:7,
uuid:"4007EA90-A347-479C-8762-44801C9EFB28"
},
{
dataProviderID:"ingr_tipo_asignacion",
displayType:2,
editable:false,
location:"149,194",
size:"196,20",
typeid:4,
uuid:"553A63DE-3793-4B4E-B8F0-4D27618E4962",
valuelistID:"397116E5-0E3C-4DA3-928E-DDA2AF6F0B48"
},
{
horizontalAlignment:4,
location:"21,194",
size:"118,20",
styleClass:"label_black",
text:"Tipo Asignacion:",
typeid:7,
uuid:"5DEAE993-0740-4ADE-9DE5-7C9BCDCC0C28"
},
{
dataProviderID:"ingr_fecha_vto",
displayType:5,
format:"dd-MM-yyyy|mask",
horizontalAlignment:4,
location:"149,253",
size:"140,20",
typeid:4,
uuid:"821E3178-3CB3-4F9B-AD45-555E7723481B",
visible:false
},
{
horizontalAlignment:4,
location:"21,282",
size:"118,20",
styleClass:"label_black",
text:"Observaciones:",
typeid:7,
uuid:"89BF503A-4377-4110-945A-EB65C94DF1EE"
},
{
dataProviderID:"ingr_observaciones",
displayType:1,
location:"149,282",
scrollbars:32,
size:"297,79",
typeid:4,
uuid:"A999699E-0402-457B-ADE2-2E90FFC2B7D8"
},
{
formIndex:2,
imageMediaID:"B59F00BB-DE87-490B-92E9-55F93601EEA5",
location:"35,52",
mediaOptions:1,
onActionMethodID:"B3583152-CB20-48C6-87FF-792547D8A300",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Volver",
typeid:7,
uuid:"AC4576A5-F39D-47F8-81FA-EFF0AAA1885A"
},
{
formIndex:1,
imageMediaID:"5C432BE9-5CB5-48FB-A4BE-25A25C33D471",
location:"180,52",
mediaOptions:1,
onActionMethodID:"B694DDB3-44C3-406E-B1BF-C61DE8B7CAA8",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Grabar",
typeid:7,
uuid:"B3671F77-FC92-401A-A489-4C44FF145187"
},
{
anchors:11,
location:"0,0",
mediaOptions:1,
size:"640,106",
styleClass:"banner",
text:"Nuevo Concepto",
transparent:true,
typeid:7,
uuid:"B4F91309-AFBA-4CD6-A006-34F80382959B"
},
{
dataProviderID:"ingr_importe",
format:"#,###.00",
horizontalAlignment:4,
location:"149,164",
size:"140,20",
typeid:4,
uuid:"C8CB5A43-13FC-4BF1-9D10-DF181044316B"
},
{
height:480,
partType:5,
typeid:19,
uuid:"F9F63E63-B354-445C-A56F-2A771C99A4DF"
},
{
dataProviderID:"ingr_primer_movimiento",
displayType:4,
location:"149,224",
size:"297,20",
text:"Se Agrega en el movimiento de alta",
typeid:4,
uuid:"FA419D6F-92F1-4954-9B2D-A10F6601BD4C"
}
],
name:"mat_ingresos_nuevo",
navigatorID:"-1",
onShowMethodID:"42BE4124-56F8-427B-9389-210B14A7F691",
showInMenu:true,
styleName:"id_style",
typeid:3,
uuid:"98E5ED61-4E6C-4CA8-B62A-98FD1DC647FE"