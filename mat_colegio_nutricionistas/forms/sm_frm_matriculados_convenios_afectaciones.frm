dataSource:"db:/sistemas/mat_rel_conv_movi",
items:[
{
height:156,
partType:5,
typeid:19,
uuid:"12B1619D-85C3-4DEC-9B5E-B2D41356E36A"
},
{
anchors:11,
horizontalAlignment:0,
labelFor:"mov_anio_emision",
location:"114,10",
name:"mov_anio_emision_label",
size:"99,20",
styleClass:"table_label",
text:"Año Emision",
typeid:7,
uuid:"3166F057-0ABE-4082-A53D-5A75A5E2CC07"
},
{
anchors:11,
dataProviderID:"mat_rel_conv_movi_to_mat_movimientos.mov_mes_emision",
editable:false,
horizontalAlignment:0,
location:"214,30",
name:"mov_mes_emision",
size:"112,20",
styleClass:"table_field",
text:"Mov Mes Emision",
typeid:4,
uuid:"342F2FAA-BE16-4D45-8A43-7A8CEEA6BA02",
valuelistID:"D30961D6-B67C-49E0-87BD-6E7EEBD46F2A"
},
{
anchors:11,
horizontalAlignment:0,
labelFor:"mov_id",
location:"19,10",
name:"mov_id_label",
size:"103,20",
styleClass:"table_label",
text:"N Boleta",
typeid:7,
uuid:"3F8B3ADF-1AC8-41C8-9F59-3C6C38A56E92"
},
{
anchors:11,
horizontalAlignment:0,
labelFor:"mov_importe",
location:"493,10",
name:"mov_importe_label",
size:"106,20",
styleClass:"table_label",
text:"Importe",
typeid:7,
uuid:"576AA1AD-019E-4937-A72E-DC2DD5FD003C"
},
{
anchors:11,
horizontalAlignment:0,
labelFor:"mov_descripcion",
location:"327,10",
name:"mov_descripcion_label",
size:"169,20",
styleClass:"table_label",
text:"Descripcion",
typeid:7,
uuid:"5BA3FCB0-2D96-467B-B473-B4C07CE3F979"
},
{
anchors:11,
dataProviderID:"mat_rel_conv_movi_to_mat_movimientos.mov_descripcion",
editable:false,
location:"327,30",
name:"mov_descripcion",
size:"169,20",
styleClass:"table_field",
text:"Mov Descripcion",
typeid:4,
uuid:"63B13898-BA55-4837-BB25-8C0A628DB1B9"
},
{
anchors:11,
dataProviderID:"mat_rel_conv_movi_to_mat_movimientos.mov_anio_emision",
editable:false,
format:"####",
horizontalAlignment:0,
location:"114,30",
name:"mov_anio_emision",
size:"99,20",
styleClass:"table_field",
text:"Mov Anio Emision",
typeid:4,
uuid:"9FD4F9E7-BC6E-4C08-8006-A95A9BED1650"
},
{
borderType:"EmptyBorder,0,0,0,0",
enabled:false,
formIndex:4,
imageMediaID:"0E4EAC8B-534A-4773-A300-0556D9E21A1A",
location:"0,31",
mediaOptions:6,
onActionMethodID:"82B32B1B-A609-47B0-94AC-389010C2357A",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
showClick:false,
size:"20,20",
toolTipText:"Editar Registro",
transparent:true,
typeid:7,
uuid:"AE81D10D-3AE2-4CAA-B767-FE4595063E48"
},
{
anchors:11,
dataProviderID:"mat_rel_conv_movi_to_mat_movimientos.mov_importe",
editable:false,
format:"#,##0.00",
horizontalAlignment:4,
location:"493,30",
name:"mov_importe",
size:"106,20",
styleClass:"table_field",
text:"Mov Importe",
typeid:4,
uuid:"B4BC3D95-82E0-40F4-90EC-E51490F142AF"
},
{
anchors:11,
horizontalAlignment:0,
labelFor:"mov_mes_emision",
location:"214,10",
name:"mov_mes_emision_label",
size:"112,20",
styleClass:"table_label",
text:"Mes Emision",
typeid:7,
uuid:"C32EC497-BC35-4A4B-A6DE-06EC77741437"
},
{
anchors:11,
dataProviderID:"mov_id",
editable:false,
format:"00000000000",
horizontalAlignment:0,
location:"19,30",
name:"mov_id",
size:"103,20",
styleClass:"table_field",
text:"Mov Id",
typeid:4,
uuid:"ECC397FA-15EA-4642-8E14-2449C50395B0"
}
],
name:"sm_frm_matriculados_convenios_afectaciones",
namedFoundSet:"separate",
showInMenu:true,
size:"608,156",
styleClass:"table",
styleName:"id_style",
typeid:3,
uuid:"36D67920-F74B-4B09-A6F9-F999D04E1F73",
view:3