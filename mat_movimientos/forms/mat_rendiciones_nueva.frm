dataSource:"db:/sistemas/mat_rendiciones",
items:[
{
dataProviderID:"ren_cant_registros",
editable:false,
formIndex:10,
horizontalAlignment:0,
location:"378,202",
name:"ren_cant_registros",
size:"99,20",
styleClass:"disable",
typeid:4,
uuid:"2D3E904A-1723-4BAE-8CF6-4D2DA7B42908"
},
{
formIndex:13,
labelFor:"ren_fecha_captura",
location:"20,152",
size:"104,20",
styleClass:"label_black",
text:"Fecha Captura:",
typeid:7,
uuid:"368FC09B-2B85-44DB-B50B-5C4BFBB40CE8"
},
{
formIndex:13,
horizontalAlignment:0,
labelFor:"ren_fecha_captura",
location:"20,130",
size:"457,20",
styleClass:"label_black",
text:"Datos leidos del archivo",
typeid:7,
uuid:"3727DE79-FD4B-447B-9B4C-3E9EC3CEB489"
},
{
dataProviderID:"vl_archivo",
editable:false,
formIndex:22,
location:"125,100",
name:"vl_archivo",
size:"286,20",
styleClass:"disable",
typeid:4,
uuid:"415BBBDA-B3AB-4A22-BECC-F138EB73ABB9"
},
{
formIndex:7,
labelFor:"medios_cobro_id",
location:"20,75",
size:"104,20",
styleClass:"label_black",
text:"Medio de Cobro:",
typeid:7,
uuid:"4963965A-2BA6-46A0-8490-46466F80EB61"
},
{
dataProviderID:"ren_importe_total",
editable:false,
formIndex:18,
format:"#,###.00",
horizontalAlignment:0,
location:"378,177",
name:"ren_importe_total",
size:"99,20",
styleClass:"disable",
typeid:4,
uuid:"578E8A67-DFC4-47B6-88DA-11E1B3C0A87B"
},
{
height:277,
partType:5,
typeid:19,
uuid:"5B34217D-B1F8-48B2-AC02-A83DEB183FEA"
},
{
dataProviderID:"ren_fecha_proceso",
editable:false,
formIndex:16,
format:"dd-MM-yyyy",
horizontalAlignment:0,
location:"126,177",
name:"ren_fecha_proceso",
size:"115,20",
styleClass:"disable",
typeid:4,
uuid:"6B748D0E-FA2D-4521-932E-F2EA13A101B7"
},
{
dataProviderID:"ren_nro_lote",
editable:false,
formIndex:20,
horizontalAlignment:0,
location:"378,152",
name:"ren_nro_lote",
size:"99,20",
styleClass:"disable",
typeid:4,
uuid:"72761C42-9583-4F68-A3A4-2DCC3AB38383"
},
{
dataProviderID:"ren_fecha_captura",
editable:false,
formIndex:14,
format:"dd-MM-yyyy",
horizontalAlignment:0,
location:"125,152",
name:"ren_fecha_captura",
size:"115,20",
styleClass:"disable",
typeid:4,
uuid:"72F01635-4116-4441-8583-E6E83C9D987C"
},
{
formIndex:15,
labelFor:"ren_fecha_proceso",
location:"20,177",
size:"105,20",
styleClass:"label_black",
text:"Fecha Proceso:",
typeid:7,
uuid:"8A58BEFA-58F9-4AB7-A02F-DDC9E9AE10B2"
},
{
formIndex:9,
labelFor:"ren_cant_registros",
location:"270,202",
size:"107,20",
styleClass:"label_black",
text:"Cant. Registros:",
typeid:7,
uuid:"8FA53081-CDA4-4330-A4BC-1C964DCA1B84"
},
{
anchors:11,
location:"0,0",
size:"501,70",
styleClass:"banner",
text:"Nueva Rendición",
transparent:true,
typeid:7,
uuid:"A4F058A1-100F-4375-AAB3-DF86B57E9600"
},
{
formIndex:2,
imageMediaID:"5C432BE9-5CB5-48FB-A4BE-25A25C33D471",
location:"273,242",
mediaOptions:1,
name:"btn_grabar",
onActionMethodID:"7F056075-3AE8-4359-9C8C-FE548F6B6963",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Grabar",
toolTipText:"Grabar",
typeid:7,
uuid:"ABD311EB-EB0C-42FA-A0A3-2FE1FC96C623"
},
{
formIndex:17,
labelFor:"ren_importe_total",
location:"270,177",
size:"107,20",
styleClass:"label_black",
text:"Importe Total:",
typeid:7,
uuid:"B1303BCA-64C2-4BAB-A3B5-45114496903D"
},
{
formIndex:1,
horizontalAlignment:0,
imageMediaID:"EAE66391-CB0B-454B-A626-1562AF79B7D7",
location:"413,100",
mediaOptions:1,
name:"btn_cancelarc",
onActionMethodID:"3FA0233D-7EF7-4732-86C5-4D94BE5565C9",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"20,20",
toolTipText:"Buscar archivo",
transparent:true,
typeid:7,
uuid:"BB94B481-ADDB-467C-BF81-8D67B5A4A6CF"
},
{
dataProviderID:"medios_cobro_id",
displayType:10,
formIndex:8,
location:"125,75",
name:"medios_cobro_id",
size:"286,20",
typeid:4,
uuid:"D88591CB-E52F-4231-8A0A-EADFF1638CD6",
valuelistID:"A193ADC1-E106-4B67-9729-73428B2920B0"
},
{
formIndex:19,
labelFor:"ren_nro_lote",
location:"270,152",
size:"107,20",
styleClass:"label_black",
text:"Nro. Lote:",
typeid:7,
uuid:"E4C8E5C8-BC31-4F19-8444-D4222D9FABA4"
},
{
formIndex:21,
labelFor:"vl_archivo",
location:"20,100",
size:"104,20",
styleClass:"label_black",
text:"Archivo:",
typeid:7,
uuid:"F1EC7A0B-F918-497B-8CA0-A64F54EF214C"
},
{
formIndex:1,
imageMediaID:"30F5AD34-FE63-4B09-9E92-5545DDFA7392",
location:"135,242",
mediaOptions:1,
name:"btn_cancelar",
onActionMethodID:"203A6FA2-C2A8-4BB6-BF2D-AE4D2B0EAFC3",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Cancelar",
toolTipText:"Cancelar",
typeid:7,
uuid:"F9BE2167-C1A3-4EBC-8053-E91CF8822F84"
}
],
name:"mat_rendiciones_nueva",
navigatorID:"-1",
onHideMethodID:"AB1ED38C-2B26-4516-8506-963740C14763",
onShowMethodID:"F793A22D-C9D2-4BF3-A782-B14CA1A958B4",
showInMenu:true,
size:"501,277",
styleClass:"formulario",
styleName:"id_style",
typeid:3,
uuid:"D050C43E-E907-4BD0-8054-734506E35156"