dataSource:"db:/sistemas/mat_movimientos_aux",
items:[
{
anchors:11,
location:"0,0",
size:"789,106",
styleClass:"banner",
text:"Detalle del Movimiento",
transparent:true,
typeid:7,
uuid:"07DC9209-8BDC-4F01-9190-EE0FCA43103C"
},
{
background:"#ffffa4",
dataProviderID:"mat_id",
editable:false,
location:"130,157",
name:"mat_id",
size:"388,20",
text:"Mat Id",
typeid:4,
uuid:"22BF246A-0636-4499-997F-B064B476F116",
valuelistID:"F6D88DD2-B460-48B8-9EC5-BF53D194215F"
},
{
background:"#ffffa4",
dataProviderID:"mov_anio_emision",
editable:false,
horizontalAlignment:4,
location:"130,222",
name:"mov_anio_emision",
size:"140,20",
text:"Mov Anio Emision",
typeid:4,
uuid:"2698B809-FD79-41F6-8E42-89193AB2D8E1"
},
{
background:"#ffffa4",
dataProviderID:"mov_mes_emision",
editable:false,
location:"130,192",
name:"mov_mes_emision",
size:"140,20",
text:"Mov Mes Emision",
typeid:4,
uuid:"290BFFA1-C964-4316-AC2F-82FEFE6EB65E",
valuelistID:"D30961D6-B67C-49E0-87BD-6E7EEBD46F2A"
},
{
background:"#ffffa4",
dataProviderID:"mov_importe",
editable:false,
format:"#,###.00",
horizontalAlignment:4,
location:"130,252",
name:"mov_importe",
size:"140,20",
text:"Mov Importe",
typeid:4,
uuid:"363193A1-F8CA-4B43-BA2A-C9FC66F227A9"
},
{
horizontalAlignment:4,
labelFor:"mat_id",
location:"40,157",
name:"mat_id_label",
size:"80,20",
styleClass:"label_black",
text:"Matriculado:",
typeid:7,
uuid:"3D6D063C-313E-41DE-A6EB-23FE951BEB02"
},
{
background:"#ffffa4",
dataProviderID:"mov_id",
editable:false,
horizontalAlignment:4,
location:"130,129",
name:"mov_id",
size:"69,20",
text:"Mov Id",
typeid:4,
uuid:"5A3894E2-B307-4658-A6EB-C0FBCCCD7622"
},
{
background:"#ffffa4",
dataProviderID:"mov_descripcion",
editable:false,
location:"204,129",
name:"mov_descripcion",
size:"541,20",
text:"Mov Descripcion",
typeid:4,
uuid:"6CEAE5E2-2C5B-4064-826F-C16B146C02BC"
},
{
horizontalAlignment:4,
labelFor:"mov_id",
location:"40,129",
name:"mov_id_label",
size:"80,20",
styleClass:"label_black",
text:"Movimiento:",
typeid:7,
uuid:"8DBFBD8C-8867-4339-9E8A-262BA724B9A6"
},
{
background:"#ffca95",
formIndex:2,
items:[
{
horizontalAlignment:2,
labelFor:"det_importe",
location:"562,220",
name:"det_importe_label",
size:"94,20",
styleClass:"label_black",
text:"Importe",
typeid:7,
uuid:"11FBC4A5-594A-4279-AE26-2EBFB6B26137"
},
{
horizontalAlignment:2,
labelFor:"res_id",
location:"659,222",
name:"res_id_label",
size:"72,20",
styleClass:"label_black",
text:"Devolucion",
typeid:7,
uuid:"169D4980-31B6-4EB1-A93E-A1C4E6E0F8FC"
},
{
dataProviderID:"mat_movimientos_aux_to_mat_movimientos_det_aux.det_importe",
editable:false,
format:"#,###.00",
horizontalAlignment:4,
location:"562,240",
name:"det_importe",
size:"94,20",
text:"Det Importe",
typeid:4,
uuid:"9C5A35A7-6EAD-4AC2-B2F2-AC943C1C23A6"
},
{
dataProviderID:"mat_movimientos_aux_to_mat_movimientos_det_aux.res_id",
editable:false,
horizontalAlignment:4,
location:"659,242",
name:"res_id",
size:"72,20",
text:"Res Id",
typeid:4,
uuid:"D546ECD6-4550-4FEF-B309-AC9FEC18D785"
},
{
dataProviderID:"mat_movimientos_aux_to_mat_movimientos_det_aux.mat_movimientos_det_aux_to_mat_ingresos.ingr_nombre",
editable:false,
location:"289,242",
name:"ingr_id",
size:"271,20",
text:"Ingr Id",
typeid:4,
uuid:"DEEEBF1E-44B2-487D-AC17-3E49900A6033"
},
{
horizontalAlignment:2,
labelFor:"ingr_id",
location:"285,219",
name:"ingr_id_label",
size:"271,20",
styleClass:"label_black",
text:"Concepto",
typeid:7,
uuid:"E23FBB61-3376-4BC7-8570-2D18C89E2DA8"
}
],
location:"285,192",
name:"portal_mat_movimientos_aux_to_mat_movimientos_det_aux_296",
relationName:"mat_movimientos_aux_to_mat_movimientos_det_aux",
size:"460,248",
typeid:6,
uuid:"A59CB0C5-151C-4426-AF5D-E2226A96A983"
},
{
horizontalAlignment:4,
labelFor:"mov_importe",
location:"40,252",
name:"mov_importe_label",
size:"80,20",
styleClass:"label_black",
text:" Importe:",
typeid:7,
uuid:"B86860BE-3DA5-413B-943F-ECF11AE72807"
},
{
formIndex:1,
imageMediaID:"B59F00BB-DE87-490B-92E9-55F93601EEA5",
location:"35,52",
mediaOptions:1,
onActionMethodID:"E6575612-686F-465D-9A27-61E04DD534C7",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Volver",
typeid:7,
uuid:"BD98E091-7300-4122-9C6F-85BC8254B96A"
},
{
horizontalAlignment:4,
labelFor:"mov_mes_emision",
location:"40,192",
name:"mov_mes_emision_label",
size:"80,20",
styleClass:"label_black",
text:"Mes:",
typeid:7,
uuid:"BE43B8BB-C295-4D12-BC26-0FDCA23175B0"
},
{
height:480,
partType:5,
typeid:19,
uuid:"CE00F35B-AB60-4543-AD2F-1FE0C6B62BFA"
},
{
horizontalAlignment:4,
labelFor:"mov_anio_emision",
location:"40,222",
name:"mov_anio_emision_label",
size:"80,20",
styleClass:"label_black",
text:"Año:",
typeid:7,
uuid:"D102E5C5-C4C4-401F-A0F6-ED77F7E17505"
}
],
name:"mat_liquidacion_resumen_movim_det",
navigatorID:"-1",
showInMenu:true,
size:"789,480",
styleClass:"formulario",
styleName:"id_style",
typeid:3,
uuid:"E7EB1350-2A74-442F-A59A-908ABE347E92"