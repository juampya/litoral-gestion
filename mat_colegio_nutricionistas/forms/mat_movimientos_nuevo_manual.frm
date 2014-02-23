dataSource:"db:/sistemas/mat_movimientos",
items:[
{
horizontalAlignment:4,
labelFor:"mov_anio_emision",
location:"525,141",
name:"mov_anio_emision_label",
size:"114,20",
styleClass:"label_black",
text:"Año:",
typeid:7,
uuid:"15F2165E-FDF1-4450-859F-10B73C74CBC7"
},
{
dataProviderID:"mov_tipo_de_movimiento",
displayType:2,
editable:false,
location:"641,116",
name:"mov_tipo_de_movimiento",
size:"158,20",
text:"Mov Tipo De Movimiento",
typeid:4,
uuid:"1A1A94FC-B9F9-48D0-A262-579B21E61CDA",
valuelistID:"25F8FEDD-B71E-49E2-B321-CAC05746902A"
},
{
dataProviderID:"mov_descripcion",
location:"113,141",
name:"mov_descripcion",
size:"397,20",
text:"Mov Descripcion",
typeid:4,
uuid:"25C834D0-5D23-4277-8374-D50CBEDA0DE4"
},
{
imageMediaID:"B59F00BB-DE87-490B-92E9-55F93601EEA5",
location:"35,52",
mediaOptions:1,
onActionMethodID:"4337D989-F049-4CFA-BD68-0A32FD112FCB",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Volver",
typeid:7,
uuid:"3EDF5781-2881-457A-BB0D-2B77F404850B"
},
{
horizontalAlignment:4,
labelFor:"mov_fecha_cobro",
location:"30,192",
name:"mov_fecha_cobro_label",
size:"80,20",
styleClass:"label_black",
text:"Fecha Cobro:",
typeid:7,
uuid:"423A1537-804A-4538-A32B-86521AFC27E8"
},
{
horizontalAlignment:4,
labelFor:"mov_mes_emision",
location:"525,166",
name:"mov_mes_emision_label",
size:"114,20",
styleClass:"label_black",
text:"Mes:",
typeid:7,
uuid:"55430EA7-2B42-459C-A9F6-D255E3FA5784"
},
{
location:"0,0",
size:"810,106",
styleClass:"banner",
text:"Nuevo Movimiento Manual",
transparent:true,
typeid:7,
uuid:"650AA9BE-EE14-4255-9EB2-7140D6F0CD61"
},
{
dataProviderID:"mov_mes_emision",
displayType:2,
editable:false,
location:"641,166",
name:"mov_mes_emision",
size:"158,20",
text:"Mov Mes Emision",
typeid:4,
uuid:"68F50D5E-00CF-40B8-867A-9715AF6FCF72",
valuelistID:"D30961D6-B67C-49E0-87BD-6E7EEBD46F2A"
},
{
height:480,
partType:5,
typeid:19,
uuid:"6BB8E6C1-99F6-4344-8189-319667F0B032"
},
{
horizontalAlignment:4,
labelFor:"mov_importe",
location:"280,192",
name:"mov_importe_label",
size:"80,20",
styleClass:"label_black",
text:"Importe:",
typeid:7,
uuid:"7728E590-A8F0-4127-9F70-F033AE3861A6"
},
{
dataProviderID:"mov_anio_emision",
displayType:2,
editable:false,
horizontalAlignment:4,
location:"641,141",
name:"mov_anio_emision",
size:"158,20",
text:"Mov Anio Emision",
typeid:4,
uuid:"7D108320-8799-4508-A90A-CC6E93FB568D",
valuelistID:"97C211F8-7C9E-41D2-8890-E4EDB38B2F2A"
},
{
anchors:15,
items:[
{
containsFormID:"39B0DAB0-B4DB-482B-B0DA-372F058211B9",
location:"0,261",
relationName:"mat_movimientos_to_mat_movimientos_det",
text:"mat_movimientos_nuevo_manual_det",
typeid:15,
uuid:"4ECF9022-7E08-4185-B89F-53E25F997879"
}
],
location:"0,231",
name:"Detalle",
printable:false,
size:"810,249",
transparent:true,
typeid:16,
uuid:"AC0752FC-7BB6-46D0-924A-D073E6F985E4"
},
{
horizontalAlignment:4,
labelFor:"mov_estado",
location:"30,166",
name:"mov_estado_label",
size:"80,20",
styleClass:"label_black",
text:"Estado:",
typeid:7,
uuid:"B2C6923A-E2E0-4D3C-B31F-290A137A16CE"
},
{
dataProviderID:"mov_estado",
displayType:2,
editable:false,
location:"113,166",
name:"mov_estado",
size:"140,20",
text:"Mov Estado",
typeid:4,
uuid:"B3EFBE06-A77B-4EFA-AE1E-83600ED8EB2D",
valuelistID:"9520E02A-25CC-4A50-BE74-9805224A65CF"
},
{
horizontalAlignment:4,
labelFor:"mov_tipo_de_movimiento",
location:"525,116",
name:"mov_tipo_de_movimiento_label",
size:"114,20",
styleClass:"label_black",
text:"Tipo De Movim.:",
typeid:7,
uuid:"B6C8475E-637A-46F7-B070-AA056282ECD6"
},
{
dataProviderID:"mat_id",
displayType:10,
location:"113,116",
name:"mat_id",
size:"397,20",
text:"Mat Id",
typeid:4,
uuid:"C99AAA8B-83CB-41C6-A300-69E39E952DA4",
valuelistID:"F6D88DD2-B460-48B8-9EC5-BF53D194215F"
},
{
imageMediaID:"5C432BE9-5CB5-48FB-A4BE-25A25C33D471",
location:"180,52",
mediaOptions:1,
onActionMethodID:"F8A48761-CF48-44E7-BA64-05D75A3C0CE1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Grabar",
typeid:7,
uuid:"D9FEEF2A-941F-45D1-844D-3930622EE887"
},
{
background:"#ffffa6",
dataProviderID:"vl_importe",
editable:false,
format:"#,###.00",
horizontalAlignment:4,
location:"370,192",
name:"mov_importe",
size:"140,20",
text:"Mov Importe",
typeid:4,
uuid:"EC1CB183-EC07-42E9-8E68-555F54647E10"
},
{
dataProviderID:"mov_fecha_cobro",
displayType:5,
format:"dd-MM-yyyy|mask",
horizontalAlignment:4,
location:"113,192",
name:"mov_fecha_cobro",
size:"140,20",
text:"Mov Fecha Cobro",
typeid:4,
uuid:"EEF13137-F5E6-4398-B4C9-84A6CF472DBF"
},
{
horizontalAlignment:4,
labelFor:"mov_descripcion",
location:"30,141",
name:"mov_descripcion_label",
size:"80,20",
styleClass:"label_black",
text:"Descripcion:",
typeid:7,
uuid:"F30196A9-118A-451D-9B34-79FB147DB341"
},
{
horizontalAlignment:4,
labelFor:"mat_id",
location:"30,116",
name:"mat_id_label",
size:"80,20",
styleClass:"label_black",
text:"Matriculado:",
typeid:7,
uuid:"F38BB3AD-1658-4D78-B440-A01EED38EF06"
}
],
name:"mat_movimientos_nuevo_manual",
navigatorID:"-1",
onShowMethodID:"6824AC1F-3BA6-4764-A432-EFB69A2CD380",
showInMenu:true,
size:"810,480",
styleClass:"formulario",
styleName:"id_style",
typeid:3,
uuid:"BA9110E4-4117-42E4-8308-FD85A1DD5FFA"