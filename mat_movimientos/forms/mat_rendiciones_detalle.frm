dataSource:"db:/sistemas/mat_rendiciones",
items:[
{
formIndex:15,
labelFor:"ren_fecha_proceso",
location:"438,130",
size:"105,20",
styleClass:"label_black",
text:"Fecha Proceso:",
typeid:7,
uuid:"00023907-0F53-40FE-B8A1-0B4EA9AAC251"
},
{
formIndex:1,
imageMediaID:"B59F00BB-DE87-490B-92E9-55F93601EEA5",
location:"35,31",
mediaOptions:1,
name:"btn_volver",
onActionMethodID:"659D443F-D223-450D-94A0-695FDBBE4175",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Volver",
toolTipText:"Volver",
typeid:7,
uuid:"118779BE-B54C-436C-92DC-4B8B2DC78555"
},
{
dataProviderID:"ren_nro_lote",
editable:false,
formIndex:20,
horizontalAlignment:0,
location:"544,80",
name:"ren_nro_lote",
size:"101,20",
styleClass:"disable",
typeid:4,
uuid:"15C38BC4-ACDF-4D91-842E-D12077EA7CA7"
},
{
anchors:11,
location:"0,0",
size:"682,70",
styleClass:"banner",
text:"Detalle de la Rendición",
transparent:true,
typeid:7,
uuid:"2E23C667-9939-4410-A435-499682AF5612"
},
{
formIndex:9,
labelFor:"ren_cant_registros",
location:"5,130",
size:"119,20",
styleClass:"label_black",
text:"Cant. Registros:",
typeid:7,
uuid:"42A20C5C-FAF1-49F0-9A18-CF6700F93109"
},
{
formIndex:13,
labelFor:"ren_fecha_captura",
location:"220,130",
size:"105,20",
styleClass:"label_black",
text:"Fecha Captura:",
typeid:7,
uuid:"463D1044-CF52-4084-9997-ECD349E45D02"
},
{
dataProviderID:"ren_estado",
editable:false,
formIndex:12,
location:"288,80",
name:"ren_estado",
size:"123,20",
styleClass:"disable",
typeid:4,
uuid:"576CD330-5CE2-4478-8D52-2774414B0936",
valuelistID:"139FCB69-3CCB-4947-A913-C2A0AA8CCB70"
},
{
formIndex:21,
items:[
{
dataProviderID:"mat_rendiciones_to_mat_movimientos.mat_id",
location:"110,210",
size:"140,20",
text:"Matriculado",
typeid:4,
uuid:"0CAB3697-4A86-455E-8D1E-95F0716635D2"
},
{
dataProviderID:"mat_rendiciones_to_mat_movimientos.mov_id",
editable:false,
location:"5,209",
size:"103,20",
text:"Boleta",
typeid:4,
uuid:"34EC681A-5055-4428-8AEE-7FB4B2BA182A"
},
{
dataProviderID:"mat_rendiciones_to_mat_movimientos.mov_anio_emision",
location:"368,210",
size:"112,20",
text:"Anio Emision",
typeid:4,
uuid:"901F3C76-56F4-4945-AE90-08487E5FF733"
},
{
dataProviderID:"mat_rendiciones_to_mat_movimientos.mov_mes_emision",
location:"252,210",
size:"112,20",
text:"Mes Emision",
typeid:4,
uuid:"E491E4C6-44C2-47E1-BA60-09BBA4F232EC"
},
{
dataProviderID:"mat_rendiciones_to_mat_movimientos.mov_fecha_cobro",
displayType:5,
location:"484,210",
name:"mov_fecha_cobro",
size:"140,20",
text:"Fecha Cobro",
typeid:4,
uuid:"FA916D39-155E-475F-AC4D-CAD49D8F0AE0"
}
],
location:"5,179",
name:"portal_mat_rendiciones_to_mat_movimientos_306",
relationName:"mat_rendiciones_to_mat_movimientos",
size:"677,308",
typeid:6,
uuid:"5FBDB302-2017-4B63-8A96-32197D38CBE6"
},
{
formIndex:17,
labelFor:"ren_importe_total",
location:"438,105",
size:"105,20",
styleClass:"label_black",
text:"Importe Total:",
typeid:7,
uuid:"7461DCD8-1BD0-4AF9-88D7-A65460E14787"
},
{
formIndex:2,
imageMediaID:"492E6F14-8334-48EB-8565-73505985E0B1",
location:"311,31",
mediaOptions:1,
name:"btn_borrar",
onActionMethodID:"145CDBC9-912B-44E7-82DD-DC855FA08B9F",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Borrar",
toolTipText:"Borrar",
typeid:7,
uuid:"7875BBF4-60C5-4F14-98D2-39A565672ADF"
},
{
formIndex:11,
labelFor:"ren_estado",
location:"220,80",
size:"67,20",
styleClass:"label_black",
text:"Estado:",
typeid:7,
uuid:"865BCA95-A960-47A6-9370-C328486DB305"
},
{
dataProviderID:"ren_id",
editable:false,
formIndex:6,
horizontalAlignment:0,
location:"125,80",
name:"ren_id",
size:"85,20",
styleClass:"disable",
typeid:4,
uuid:"A4F1D570-B7CB-459A-81B9-2DE3048B5A37"
},
{
formIndex:2,
imageMediaID:"D9B98FB7-FA26-4B94-9344-A8F3D7B883AD",
location:"449,31",
mediaOptions:1,
name:"btn_imprimir",
onActionMethodID:"3240DB72-DF91-4B42-AB3B-D0F6AB9CA866",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Imprimir",
toolTipText:"Imprimir",
typeid:7,
uuid:"B98D49E2-20EC-465A-BD97-63BAF6CC8790"
},
{
dataProviderID:"ren_cant_registros",
editable:false,
formIndex:10,
horizontalAlignment:0,
location:"125,130",
name:"ren_cant_registros",
size:"85,20",
styleClass:"disable",
typeid:4,
uuid:"BDC74ABB-3A30-4962-942F-7C533094F6FF"
},
{
formIndex:5,
labelFor:"ren_id",
location:"5,80",
size:"119,20",
styleClass:"label_black",
text:"ID:",
typeid:7,
uuid:"C329ABDD-4CF8-4D3D-9803-C867FC70F928"
},
{
formIndex:19,
labelFor:"ren_nro_lote",
location:"438,80",
size:"105,20",
styleClass:"label_black",
text:"Nro. Lote:",
typeid:7,
uuid:"C387B828-180A-48E9-A9BC-BA5FC19E21A0"
},
{
dataProviderID:"ren_importe_total",
editable:false,
formIndex:18,
format:"#,###.00",
horizontalAlignment:0,
location:"544,105",
name:"ren_importe_total",
size:"101,20",
styleClass:"disable",
typeid:4,
uuid:"CECDB8B0-090E-4015-A57B-94E9D649EE88"
},
{
dataProviderID:"ren_fecha_proceso",
editable:false,
formIndex:16,
format:"dd-MM-yyyy",
horizontalAlignment:0,
location:"544,130",
name:"ren_fecha_proceso",
size:"101,20",
styleClass:"disable",
typeid:4,
uuid:"CF39BC69-25C9-4220-AE7D-6799CDB5CCD7"
},
{
dataProviderID:"medios_cobro_id",
editable:false,
formIndex:8,
location:"125,105",
name:"medios_cobro_id",
size:"286,20",
styleClass:"disable",
typeid:4,
uuid:"E7941B7E-6DBE-404F-B01F-15B22B7016C8",
valuelistID:"A193ADC1-E106-4B67-9729-73428B2920B0"
},
{
formIndex:2,
imageMediaID:"5C432BE9-5CB5-48FB-A4BE-25A25C33D471",
location:"173,31",
mediaOptions:1,
name:"btn_grabar",
onActionMethodID:"8A8856B7-256F-4ED4-8EDD-D296612BCCE7",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Grabar",
toolTipText:"Grabar",
typeid:7,
uuid:"F410FF9A-FDF1-48EA-BE95-1CA514F12A84"
},
{
height:487,
partType:5,
typeid:19,
uuid:"F7A44D1E-86E3-40E4-AA88-111DEA3C672D"
},
{
dataProviderID:"ren_fecha_captura",
editable:false,
formIndex:14,
format:"dd-MM-yyyy",
horizontalAlignment:0,
location:"326,130",
name:"ren_fecha_captura",
size:"101,20",
styleClass:"disable",
typeid:4,
uuid:"F7AB8598-A775-443D-AF93-0BE8B933447A"
},
{
formIndex:7,
labelFor:"medios_cobro_id",
location:"5,105",
size:"119,20",
styleClass:"label_black",
text:"Medio de Cobro:",
typeid:7,
uuid:"FB9D6C81-5137-405C-8F2A-B9CF0CF3A00A"
}
],
name:"mat_rendiciones_detalle",
navigatorID:"-1",
showInMenu:true,
size:"682,487",
styleClass:"formulario",
styleName:"id_style",
typeid:3,
uuid:"25069231-E531-4433-BFF9-461153D67C1F"