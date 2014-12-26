dataSource:"db:/sistemas/mat_movimientos_det",
items:[
{
background:"#6bb75e",
horizontalAlignment:0,
labelFor:"det_importe",
location:"241,48",
name:"det_importe_label",
size:"87,20",
styleClass:"label_black",
text:"Importe",
typeid:7,
uuid:"034A09ED-8E10-41BB-A5A7-C8DD6D12020A"
},
{
height:45,
partType:1,
typeid:19,
uuid:"07634C71-2AC8-407F-9AF9-7EC4D8DA4C22"
},
{
anchors:11,
background:"#6bb75e",
horizontalAlignment:0,
labelFor:"det_observacion",
location:"639,48",
name:"det_observacion_label",
size:"255,20",
styleClass:"label_black",
text:"Detalle",
typeid:7,
uuid:"10CEAAC1-FB72-4E21-9F9E-D09AB27F7A91"
},
{
height:276,
partType:5,
typeid:19,
uuid:"136487EE-5273-4056-8611-136E36E34F7D"
},
{
dataProviderID:"ingr_id",
location:"0,68",
name:"ingr_id",
size:"241,20",
styleClass:"table_field",
text:"Ingr Id",
typeid:4,
uuid:"32DCD1EE-653B-47C8-8861-341F4AB19E36",
valuelistID:"5F4BF39A-BC0E-447D-A37F-E3392E0B35C1"
},
{
dataProviderID:"mat_movimientos_det_to_mat_resarcimientos.res_importe",
editable:false,
format:"#,##0.00",
horizontalAlignment:4,
location:"328,68",
name:"res_id",
size:"92,20",
styleClass:"table_field",
text:"Res Id",
typeid:4,
uuid:"40237AFB-6627-4205-8E0C-C1CA6C92D161"
},
{
dataProviderID:"det_importe",
format:"#,##0.00",
horizontalAlignment:4,
location:"241,68",
name:"det_importe",
onDataChangeMethodID:"BC73CE93-F821-48A8-8338-F830CC431CF4",
size:"87,20",
styleClass:"table_field",
text:"Det Importe",
typeid:4,
uuid:"4846EC36-0CFB-41E7-941B-69F4EA3C672A"
},
{
anchors:11,
location:"0,0",
size:"916,44",
styleClass:"sub_banner",
text:"Conceptos",
transparent:true,
typeid:7,
uuid:"642A3DBD-C31E-4C24-95E1-FD6BEC422C59"
},
{
horizontalAlignment:0,
labelFor:"det_importe_2vto",
location:"419,48",
name:"det_importe_2vto_label",
size:"110,20",
styleClass:"label_black",
text:"Importe 2vto",
typeid:7,
uuid:"80793A2A-B7E5-4ED5-8F86-692915684C7E"
},
{
background:"#6bb75e",
horizontalAlignment:0,
labelFor:"ingr_id",
location:"0,48",
name:"ingr_id_label",
size:"241,20",
styleClass:"label_black",
text:"Concepto",
typeid:7,
uuid:"A1981830-6829-4964-A2CE-59D99BD4F873"
},
{
anchors:11,
dataProviderID:"det_observacion",
location:"639,68",
name:"det_observacion",
size:"255,20",
styleClass:"table_field",
text:"Det Observacion",
typeid:4,
uuid:"BE72AA81-9DA4-4DAE-8CEE-F7616EAD5931"
},
{
dataProviderID:"det_importe_cobrado",
editable:false,
format:"#,##0.00",
horizontalAlignment:4,
location:"528,68",
name:"det_importe_cobrado",
size:"110,20",
styleClass:"table_field",
typeid:4,
uuid:"C995AF79-B9B8-4225-B033-214C11D7355B"
},
{
imageMediaID:"382776FF-9225-46C5-9AB8-3377B48C7283",
location:"114,13",
mediaOptions:1,
name:"btn_agregar",
onActionMethodID:"2461210A-7448-4A2E-A2D4-1209CFBD47E7",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"100,20",
text:"Agregar",
typeid:7,
uuid:"E68B827E-53A9-4EF8-9CE5-CED884AA3A81"
},
{
horizontalAlignment:0,
labelFor:"det_importe_cobrado",
location:"528,48",
name:"det_importe_cobrado_label",
size:"110,20",
styleClass:"label_black",
text:"Imp. Cobrado",
typeid:7,
uuid:"EA4E32E7-0C18-4F68-9363-BBA8C4AA45C5"
},
{
dataProviderID:"det_importe_2vto",
editable:false,
format:"#,##0.00",
horizontalAlignment:4,
location:"419,68",
name:"det_importe_2vto",
size:"110,20",
styleClass:"table_field",
typeid:4,
uuid:"F0904F9F-CBAC-4471-A70A-74D73A3B6741"
},
{
background:"#6bb75e",
horizontalAlignment:0,
labelFor:"res_id",
location:"328,48",
name:"res_id_label",
size:"92,20",
styleClass:"label_black",
text:"Devoluciones",
typeid:7,
uuid:"F7D01E07-9746-4A2C-9AA5-BC93227D0A1C"
},
{
imageMediaID:"492E6F14-8334-48EB-8565-73505985E0B1",
location:"894,70",
name:"btn_borrar",
onActionMethodID:"5388C5DC-991C-40B1-A12C-1AE3C9523E0E",
showClick:false,
size:"16,16",
text:"",
typeid:7,
uuid:"FF54ABAC-2F01-444E-96C1-5E98F1E2EE4C"
}
],
name:"mat_movimientos_detalle_conceptos",
showInMenu:true,
size:"916,276",
styleClass:"table",
styleName:"id_style",
typeid:3,
uuid:"3C025ECE-55D1-4E1E-B8B8-373111231CDF",
view:3