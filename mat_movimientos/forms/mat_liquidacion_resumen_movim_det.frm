dataSource:"db:/sistemas/mat_movimientos_aux",
items:[
{
horizontalAlignment:4,
labelFor:"mov_mes_emision",
location:"40,192",
name:"mov_mes_emision_label",
size:"80,20",
styleClass:"label_black",
text:"Mes:",
typeid:7,
uuid:"0EDC2E2D-5BE6-4742-BAE0-3249ED9670A0"
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
uuid:"22098704-F944-44DE-9F02-26B5CCC61FE5"
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
uuid:"24724DEB-95FE-44AB-A2C9-6227AE36203B"
},
{
background:"#ffffa4",
dataProviderID:"mov_fec_vto1",
editable:false,
format:"dd-MM-yyyy|mask",
horizontalAlignment:4,
location:"130,287",
name:"mov_fec_vto1",
size:"111,20",
text:"Mov Fecha Cobro",
typeid:4,
uuid:"2A67C66B-51E7-41DE-9D85-F97C3C3B471F"
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
uuid:"389086EC-BD49-4A04-9B4F-25E6C59A827A"
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
uuid:"4C1E4519-5B3F-400C-9345-34B6E707E5D2",
valuelistID:"F6D88DD2-B460-48B8-9EC5-BF53D194215F"
},
{
background:"#ffffa4",
dataProviderID:"mov_importe",
editable:false,
format:"#,###.00",
horizontalAlignment:4,
location:"130,252",
name:"mov_importe",
size:"111,20",
text:"Mov Importe",
typeid:4,
uuid:"4D067030-8BD7-4623-AE74-3C6E26ACF857"
},
{
anchors:11,
location:"0,0",
size:"789,106",
styleClass:"banner",
text:"Detalle del Movimiento",
transparent:true,
typeid:7,
uuid:"6389B21B-C548-4E8B-A7E8-A3A775FAC2EB"
},
{
formIndex:1,
imageMediaID:"B59F00BB-DE87-490B-92E9-55F93601EEA5",
location:"35,52",
mediaOptions:1,
name:"btn_volver",
onActionMethodID:"C29C6DBF-9449-4BDA-A659-BC294661CF0D",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Volver",
typeid:7,
uuid:"8402601C-D1F6-48BA-B4CA-F1ABBFD95142"
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
uuid:"06872A3F-818B-4D83-B7FF-0949D4FC429B"
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
uuid:"1EB27414-66E6-41C9-A3DA-5E290E55BE3A"
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
uuid:"20E1F6FA-CDA1-4032-A5E5-B807558D26AB"
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
uuid:"6C351AF8-8C7C-4333-B372-1A90A78DFBC7"
},
{
dataProviderID:"mat_movimientos_aux_to_mat_movimientos_det_aux.mat_movimientos_det_aux_to_mat_ingresos.ingr_nombre",
editable:false,
location:"289,242",
name:"ingr_id",
size:"271,20",
text:"Ingr Id",
typeid:4,
uuid:"B030451F-3D96-4F44-8ECF-A4915B7FE906"
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
uuid:"E55E05EC-6F1D-4413-84E6-CDE3BE89E953"
}
],
location:"285,192",
name:"portal_mat_movimientos_aux_to_mat_movimientos_det_aux_296",
relationName:"mat_movimientos_aux_to_mat_movimientos_det_aux",
size:"460,248",
typeid:6,
uuid:"8E420F00-7920-4D8B-BE1C-FC5B89D56EA3"
},
{
background:"#ffffa4",
dataProviderID:"mov_fec_vto2",
editable:false,
format:"dd-MM-yyyy|mask",
horizontalAlignment:4,
location:"130,312",
name:"mov_fec_vto2",
size:"111,20",
text:"Mov Fecha Cobro",
typeid:4,
uuid:"947F5052-7FE1-4935-A362-FC210B04D54F"
},
{
horizontalAlignment:4,
labelFor:"mov_fecha_cobro",
location:"40,287",
name:"mov_fec_vto1_label",
size:"80,20",
styleClass:"label_black",
text:"1° Vto:",
typeid:7,
uuid:"B57BEAEF-2A1F-46AF-829B-0D90B36318D1"
},
{
height:480,
partType:5,
typeid:19,
uuid:"B897D74B-429F-4016-9920-273A0E90544A"
},
{
background:"#ffffa4",
dataProviderID:"mov_anio_emision",
editable:false,
format:"####",
horizontalAlignment:4,
location:"130,222",
name:"mov_anio_emision",
size:"111,20",
text:"Mov Anio Emision",
typeid:4,
uuid:"BEB3DD37-10BC-4DD9-8592-B7FE835B22C6"
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
uuid:"BF233841-D64F-4070-842B-A7A1046C1EEE"
},
{
formIndex:2,
imageMediaID:"D9B98FB7-FA26-4B94-9344-A8F3D7B883AD",
location:"170,52",
mediaOptions:1,
name:"btn_imprimir",
onActionMethodID:"ED55BFA8-D1EC-4600-AE66-F9FFDAC3CE32",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Imprimir",
typeid:7,
uuid:"D9180378-FFA7-4F5B-B094-84B980812FFA"
},
{
background:"#ffffa4",
dataProviderID:"mov_mes_emision",
editable:false,
horizontalAlignment:4,
location:"130,192",
name:"mov_mes_emision",
size:"111,20",
text:"Mov Mes Emision",
typeid:4,
uuid:"DC300DA4-893F-41EB-AFF4-F83FE1EE688F",
valuelistID:"D30961D6-B67C-49E0-87BD-6E7EEBD46F2A"
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
uuid:"E4A298DE-2B57-44EC-BFA2-3470342DAF67"
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
uuid:"E67E7A0D-1C15-4740-BFC9-74B79712A4C9"
},
{
horizontalAlignment:4,
labelFor:"mov_fecha_cobro",
location:"40,312",
name:"mov_fec_vto2_label",
size:"80,20",
styleClass:"label_black",
text:"2° Vto:",
typeid:7,
uuid:"E97155AF-D4F4-40AA-B67C-03209DD89997"
}
],
name:"mat_liquidacion_resumen_movim_det",
navigatorID:"-1",
showInMenu:true,
size:"789,480",
styleClass:"formulario",
styleName:"id_style",
typeid:3,
uuid:"71D53D31-BBED-4044-8AEF-C759E76BA854"