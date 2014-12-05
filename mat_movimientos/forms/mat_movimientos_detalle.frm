dataSource:"db:/sistemas/mat_movimientos",
items:[
{
horizontalAlignment:4,
labelFor:"mov_anio_emision",
location:"470,110",
name:"mov_anio_emision_label",
size:"80,20",
styleClass:"label_black",
text:"Año:",
typeid:7,
uuid:"06A934FA-4740-4B79-8AB8-A75EF438C1FC"
},
{
height:592,
partType:5,
typeid:19,
uuid:"06BB3C2C-96E9-4296-AED4-00B6F4DF8BF7"
},
{
formIndex:1,
imageMediaID:"B59F00BB-DE87-490B-92E9-55F93601EEA5",
location:"35,31",
mediaOptions:1,
name:"btn_volver",
onActionMethodID:"63BACD58-6CB4-4DB4-9A27-230C31182D3F",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Volver",
toolTipText:"Volver",
typeid:7,
uuid:"0AD75047-A133-410E-9C55-67C2CD3610D1"
},
{
background:"#ffffa4",
dataProviderID:"mov_anio_emision",
editable:false,
format:"####",
horizontalAlignment:4,
location:"555,110",
name:"mov_anio_emision",
size:"111,20",
text:"Mov Anio Emision",
typeid:4,
uuid:"0B2D6190-BE6A-4C76-A3A2-24B7F58FF657"
},
{
background:"#ffffa4",
dataProviderID:"mov_importe",
editable:false,
format:"#,###.00",
horizontalAlignment:4,
location:"99,160",
name:"mov_importe",
size:"111,20",
text:"Mov Importe",
typeid:4,
uuid:"0D023513-FFA3-465B-985A-D45D7C52ADE3"
},
{
background:"#ffffa4",
dataProviderID:"mov_fec_vto2",
editable:false,
format:"dd-MM-yyyy|mask",
horizontalAlignment:4,
location:"349,135",
name:"mov_fec_vto2",
size:"111,20",
text:"Mov Fecha Cobro",
typeid:4,
uuid:"15D9DDE0-B345-47D1-A229-AD2655742407"
},
{
background:"#ffffa4",
dataProviderID:"mov_id",
editable:false,
format:"00000000000",
horizontalAlignment:0,
location:"99,85",
name:"mov_id",
size:"97,20",
text:"Mov Id",
typeid:4,
uuid:"18B830D2-8651-4425-93E9-A9C9E81A5A7C"
},
{
background:"#ffffa4",
dataProviderID:"mov_tipo_de_movimiento",
editable:false,
location:"99,185",
name:"mov_tipo_de_movimiento",
size:"160,20",
text:"Mov Tipo De Movimiento",
typeid:4,
uuid:"2B332481-0232-4CBA-BBD4-F3D82192B80C",
valuelistID:"833115B4-B73A-4179-834D-2BB5CCA5888E"
},
{
horizontalAlignment:4,
labelFor:"mov_importe",
location:"12,160",
name:"mov_importe_label",
size:"80,20",
styleClass:"label_black",
text:" Importe:",
typeid:7,
uuid:"3759B82E-3573-4D78-8B82-BA61F944FDE2"
},
{
dataProviderID:"mov_estado",
displayType:2,
editable:false,
location:"555,160",
name:"mov_estado",
onDataChangeMethodID:"2A1E1D39-D86F-4F98-87C4-133304683094",
size:"111,20",
text:"Mov Estado",
typeid:4,
uuid:"4F0863B2-0E29-4962-AAFE-9734CA6D4AF7",
valuelistID:"9520E02A-25CC-4A50-BE74-9805224A65CF"
},
{
background:"#ffffa4",
dataProviderID:"mov_mes_emision",
editable:false,
horizontalAlignment:4,
location:"555,85",
name:"mov_mes_emision",
size:"111,20",
text:"Mov Mes Emision",
typeid:4,
uuid:"570BF4F8-3E68-496E-A845-AC5E58B1453D",
valuelistID:"D30961D6-B67C-49E0-87BD-6E7EEBD46F2A"
},
{
background:"#ffffa4",
dataProviderID:"mov_recargo",
editable:false,
format:"#,###.00",
horizontalAlignment:4,
location:"349,185",
name:"mov_recargo",
size:"47,20",
text:"Mov Importe",
typeid:4,
uuid:"60A93ACF-4823-4771-9AD1-92737FB06D9A"
},
{
background:"#ffffa4",
dataProviderID:"mov_fec_vto1",
editable:false,
format:"dd-MM-yyyy|mask",
horizontalAlignment:4,
location:"99,135",
name:"mov_fec_vto1",
size:"111,20",
text:"Mov Fecha Cobro",
typeid:4,
uuid:"624D7F54-F66C-49FF-98FE-F59121ED1F2C"
},
{
horizontalAlignment:4,
labelFor:"mov_fecha_cobro",
location:"12,135",
name:"mov_fec_vto1_label",
size:"80,20",
styleClass:"label_black",
text:"1° Vto:",
typeid:7,
uuid:"63E8A65D-8E43-48F6-A1FF-3297ADFE9F5D"
},
{
background:"#d9ecd5",
formIndex:5,
items:[
{
anchors:11,
background:"#6bb75e",
horizontalAlignment:0,
labelFor:"det_observacion",
location:"425,282",
name:"det_observacion_label",
size:"255,20",
styleClass:"label_black",
text:"Detalle",
typeid:7,
uuid:"0FD9805B-57E3-47DC-B4F4-DBC6570A75E9"
},
{
background:"#6bb75e",
horizontalAlignment:0,
labelFor:"ingr_id",
location:"5,282",
name:"ingr_id_label",
size:"241,20",
styleClass:"label_black",
text:"Concepto",
typeid:7,
uuid:"44CEECAD-5FFA-47E2-87B5-1CD0C784A002"
},
{
background:"#6bb75e",
horizontalAlignment:0,
labelFor:"det_importe",
location:"246,282",
name:"det_importe_label",
size:"87,20",
styleClass:"label_black",
text:"Importe",
typeid:7,
uuid:"5AB64A9E-28A2-4902-A74B-AD8E0A227EDA"
},
{
anchors:11,
dataProviderID:"mat_movimientos_to_mat_movimientos_det.det_observacion",
editable:false,
location:"425,302",
name:"det_observacion",
size:"255,20",
styleClass:"table_field",
text:"Det Observacion",
typeid:4,
uuid:"5D414675-D987-4710-82B5-A2E1B4825CA1"
},
{
dataProviderID:"mat_movimientos_to_mat_movimientos_det.res_id",
editable:false,
location:"333,302",
name:"res_id",
size:"92,20",
styleClass:"table_field",
text:"Res Id",
typeid:4,
uuid:"6E192AB4-A045-4ACD-82A0-D8F0F309548A"
},
{
dataProviderID:"mat_movimientos_to_mat_movimientos_det.mat_movimientos_det_to_mat_ingresos.ingr_nombre",
editable:false,
location:"5,302",
name:"ingr_id",
size:"241,20",
styleClass:"table_field",
text:"Ingr Id",
typeid:4,
uuid:"81D4AF0B-8EE5-497F-BBE6-37EF4BD1C158"
},
{
dataProviderID:"mat_movimientos_to_mat_movimientos_det.det_importe",
editable:false,
format:"#,##0.00",
horizontalAlignment:4,
location:"246,302",
name:"det_importe",
size:"87,20",
styleClass:"table_field",
text:"Det Importe",
typeid:4,
uuid:"8209E755-6D79-4F04-8516-6FD63892B30D"
},
{
background:"#6bb75e",
horizontalAlignment:0,
labelFor:"res_id",
location:"333,282",
name:"res_id_label",
size:"92,20",
styleClass:"label_black",
text:"Devoluciones",
typeid:7,
uuid:"F1BE5FDC-4ED0-4DC8-8AC9-71B9C9385ADB"
}
],
location:"5,282",
name:"portal_mat_movimientos_to_mat_movimientos_det_361",
relationName:"mat_movimientos_to_mat_movimientos_det",
size:"677,199",
typeid:6,
uuid:"6AAB16A7-0D2B-48D2-A8B6-9AD05CF77DB9"
},
{
horizontalAlignment:4,
labelFor:"mov_importe",
location:"264,185",
name:"mov_importe_labelcc",
size:"80,20",
styleClass:"label_black",
text:"Recargo:",
typeid:7,
uuid:"7873D243-56C6-4004-B406-426330466552"
},
{
dataProviderID:"mov_fecha_cobro",
displayType:5,
editable:false,
format:"dd-MM-yyyy|mask",
horizontalAlignment:4,
location:"555,135",
name:"mov_fecha_cobro",
size:"111,20",
text:"Mov Fecha Cobro",
typeid:4,
uuid:"7E3471A9-4C40-4B96-A14C-3921D3D525F6"
},
{
background:"#ffffa4",
dataProviderID:"ren_id",
editable:false,
horizontalAlignment:4,
location:"555,185",
name:"ren_id",
size:"112,20",
styleClass:"disable",
text:"Mat Nro Matricula",
typeid:4,
uuid:"7F0D81C0-00CD-46E6-95CD-F418FCCFA978"
},
{
background:"#ffffa4",
dataProviderID:"mov_descripcion",
editable:false,
location:"201,85",
name:"mov_descripcion",
size:"261,20",
text:"Mov Descripcion",
typeid:4,
uuid:"8A172E1F-2F62-4D1C-94B0-2F7CCC565EF3"
},
{
horizontalAlignment:4,
labelFor:"mov_fecha_cobro",
location:"470,135",
name:"mov_fecha_cobro_label",
size:"80,20",
styleClass:"label_black",
text:"Fecha Cobro:",
typeid:7,
uuid:"8E50D9E7-B8D5-458F-A5B2-1422B11D8E1B"
},
{
horizontalAlignment:4,
labelFor:"mov_id",
location:"12,85",
name:"mov_id_label",
size:"80,20",
styleClass:"label_black",
text:"N Boleta:",
typeid:7,
uuid:"984183F6-6EF6-4439-A462-60FA12E7B0E3"
},
{
horizontalAlignment:4,
labelFor:"mov_mes_emision",
location:"470,85",
name:"mov_mes_emision_label",
size:"80,20",
styleClass:"label_black",
text:"Mes:",
typeid:7,
uuid:"9E0CDFCB-C7B8-4461-A106-36FE7BC5DCAE"
},
{
dataProviderID:"mov_observacion",
displayType:1,
formIndex:7,
location:"100,210",
name:"mov_observacion",
scrollbars:32,
size:"542,67",
typeid:4,
uuid:"A0A26A2D-4497-4C76-9DDF-7432B3E678E1"
},
{
formIndex:2,
imageMediaID:"FA051ACD-4D22-4B83-BC23-C6E9A0311315",
location:"575,31",
mediaOptions:1,
name:"btn_mail",
onActionMethodID:"89872644-FD3F-4189-A885-E8D82ED765E3",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Mail",
toolTipText:"Enviar por Mail",
typeid:7,
uuid:"A2804B57-DF5D-4EF1-A021-D73FBE5B6D08"
},
{
background:"#ffffa4",
dataProviderID:"mov_importe_2vto",
editable:false,
format:"#,###.00",
horizontalAlignment:4,
location:"349,160",
name:"mov_importe_2vto",
size:"111,20",
text:"Mov Importe",
typeid:4,
uuid:"A50CD2C5-70F4-4E55-B2D2-577120FAB587"
},
{
horizontalAlignment:4,
labelFor:"mov_tipo_de_movimiento",
location:"12,185",
name:"mov_tipo_de_movimiento_label",
size:"80,20",
styleClass:"label_black",
text:"Tipo Movim.:",
typeid:7,
uuid:"AAC77488-1A74-45CE-A603-4A89F7EC1554"
},
{
dataProviderID:"mov_cod_barra",
displayType:9,
editable:false,
formIndex:4,
horizontalAlignment:0,
location:"36,486",
scrollbars:36,
size:"631,63",
typeid:4,
uuid:"B0B9668E-177E-4442-B9FC-BB978FC4BC91"
},
{
horizontalAlignment:4,
labelFor:"mov_fecha_cobro",
location:"264,135",
name:"mov_fec_vto2_label",
size:"80,20",
styleClass:"label_black",
text:"2° Vto:",
typeid:7,
uuid:"BC117498-7C4B-4E8A-A6F3-5C5B9AE9C7A8"
},
{
labelFor:"ren_id",
location:"470,185",
name:"ren_id_label",
size:"80,20",
styleClass:"label_black",
text:"Rendición:",
typeid:7,
uuid:"BF4804F9-B4F1-4EEF-9536-8D4479EC5F22"
},
{
formIndex:2,
imageMediaID:"5C432BE9-5CB5-48FB-A4BE-25A25C33D471",
location:"170,31",
mediaOptions:1,
name:"btn_grabar",
onActionMethodID:"FB8CC65C-9B43-48F0-9E60-2E6206E9B80D",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Grabar",
toolTipText:"Grabar",
typeid:7,
uuid:"CB9A8EC9-69D9-4E90-A88E-6E36150CB1F4"
},
{
background:"#ffffa4",
dataProviderID:"mat_id",
editable:false,
location:"99,110",
name:"mat_id",
size:"361,20",
text:"Mat Id",
typeid:4,
uuid:"D3D2AAC4-E3C2-49BB-BADE-0B6FD5FA8304",
valuelistID:"F6D88DD2-B460-48B8-9EC5-BF53D194215F"
},
{
anchors:11,
location:"0,0",
size:"779,70",
styleClass:"banner",
text:"Detalle del Movimiento",
transparent:true,
typeid:7,
uuid:"DA230239-2E56-41FE-A9D9-794197316A08"
},
{
formIndex:2,
imageMediaID:"D9B98FB7-FA26-4B94-9344-A8F3D7B883AD",
location:"440,31",
mediaOptions:1,
name:"btn_imprimir",
onActionMethodID:"7362B32F-467D-4628-B9F8-EE0990E2AD67",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Imprimir",
toolTipText:"Imprimir",
typeid:7,
uuid:"DA75ECCE-8F08-4E40-B49C-7F440E7357E4"
},
{
horizontalAlignment:4,
labelFor:"mat_id",
location:"12,110",
name:"mat_id_label",
size:"80,20",
styleClass:"label_black",
text:"Matriculado:",
typeid:7,
uuid:"DCCDC4D7-AD41-4AE8-AF01-D407165A216A"
},
{
formIndex:6,
labelFor:"mov_observacion",
location:"12,210",
name:"mov_observacion_label",
size:"80,20",
styleClass:"label_black",
text:"Observación:",
typeid:7,
uuid:"E3BDDBBD-18F7-4C91-8928-43031382CB3C"
},
{
horizontalAlignment:4,
labelFor:"mov_importe",
location:"264,160",
name:"mov_importe_labelc",
size:"80,20",
styleClass:"label_black",
text:" Importe:",
typeid:7,
uuid:"E878616B-8847-455B-8137-CF6A77FA6887"
},
{
enabled:false,
formIndex:2,
imageMediaID:"492E6F14-8334-48EB-8565-73505985E0B1",
location:"305,31",
mediaOptions:1,
name:"btn_borrar",
onActionMethodID:"8F795844-C43D-4722-BCDC-0FFAA688D62E",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Borrar",
toolTipText:"Borrar",
typeid:7,
uuid:"F22C34E9-A9D4-4823-B535-95780A6E9571"
},
{
horizontalAlignment:4,
labelFor:"mov_estado",
location:"470,160",
name:"mov_estado_label",
size:"80,20",
styleClass:"label_black",
text:"Estado:",
typeid:7,
uuid:"FF1CDB68-ED09-4E44-93DF-CC817077EA29"
}
],
name:"mat_movimientos_detalle",
navigatorID:"-1",
onShowMethodID:"BBAD4A1D-620D-49DB-B7E5-5C4BDE167430",
showInMenu:true,
size:"779,592",
styleClass:"formulario",
styleName:"id_style",
typeid:3,
uuid:"3ABE213F-58F4-47EB-BB21-45E4459AA463"