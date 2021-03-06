dataSource:"db:/sistemas/mat_movimientos",
items:[
{
background:"#ffffa6",
dataProviderID:"vl_importe",
editable:false,
format:"#,###.00",
horizontalAlignment:4,
location:"350,191",
size:"136,20",
text:"Mov Importe",
typeid:4,
uuid:"05A723FB-A0A5-4988-96AA-3E2A12506015"
},
{
horizontalAlignment:4,
labelFor:"",
location:"259,191",
size:"89,20",
styleClass:"label_black",
text:"Importe:",
typeid:7,
uuid:"0D5EACCE-B210-4885-A0C1-8FC51ECA4793"
},
{
dataProviderID:"mov_observacion",
displayType:1,
location:"113,240",
scrollbars:32,
size:"686,65",
typeid:4,
uuid:"1BE5F373-5E83-4BB2-9A5B-4E6F1D5BF6F4"
},
{
anchors:11,
location:"0,0",
size:"810,106",
styleClass:"banner",
text:"Nuevo Movimiento Manual",
transparent:true,
typeid:7,
uuid:"1C512E63-DF48-48ED-B8DD-C64C1CD2BAC1"
},
{
dataProviderID:"mov_fec_vto2",
displayType:5,
format:"dd-MM-yyyy|mask",
horizontalAlignment:4,
location:"115,215",
size:"138,20",
text:"Mov Fecha Cobro",
typeid:4,
uuid:"28567F15-F3F4-4830-AB06-5B43ACF0A06E"
},
{
dataProviderID:"mov_tipo_de_movimiento",
displayType:2,
editable:false,
location:"641,116",
onDataChangeMethodID:"98DD2570-A127-4B29-8BAD-88C825194BAE",
size:"158,20",
text:"Mov Tipo De Movimiento",
typeid:4,
uuid:"28A24FFD-8A7F-42A0-B605-8167020F86C2",
valuelistID:"25F8FEDD-B71E-49E2-B321-CAC05746902A"
},
{
anchors:15,
items:[
{
containsFormID:"159563B5-5CB6-4DC2-93F3-263CA012792D",
location:"0,355",
relationName:"mat_movimientos_to_mat_movimientos_det",
text:"mat_movimientos_nuevo_manual_det",
typeid:15,
uuid:"ECA21552-209F-49DC-97F9-318AF097877E"
}
],
location:"0,325",
name:"Detalle",
printable:false,
size:"810,215",
transparent:true,
typeid:16,
uuid:"30B37B0C-5AF1-489B-88FD-5C1D3497D8AA"
},
{
horizontalAlignment:4,
labelFor:"",
location:"30,116",
size:"80,20",
styleClass:"label_black",
text:"Matriculado:",
typeid:7,
uuid:"3416EE18-2AA0-45B7-8569-AFD3CDB13526"
},
{
dataProviderID:"mov_fec_vto1",
displayType:5,
format:"dd-MM-yyyy|mask",
horizontalAlignment:4,
location:"115,191",
size:"138,20",
text:"Mov Fecha Cobro",
typeid:4,
uuid:"3F131C31-AC72-456C-849D-70A235DF4B4F"
},
{
horizontalAlignment:4,
labelFor:"",
location:"259,215",
size:"89,20",
styleClass:"label_black",
text:"Importe:",
typeid:7,
uuid:"4C6977AC-2837-42D6-8898-29BECB92BEE1"
},
{
horizontalAlignment:4,
labelFor:"",
location:"30,141",
size:"80,20",
styleClass:"label_black",
text:"Descripcion:",
typeid:7,
uuid:"589B32F6-C1DD-42F8-946D-ED74D50527D6"
},
{
horizontalAlignment:4,
labelFor:"",
location:"30,215",
size:"80,20",
styleClass:"label_black",
text:"2° Vto.:",
typeid:7,
uuid:"5F79E5D7-A9F6-45B3-B499-88E346771277"
},
{
background:"#ffff9d",
dataProviderID:"mat_id",
editable:false,
location:"113,116",
size:"397,20",
text:"Mat Id",
typeid:4,
uuid:"5FEF672A-0C34-4CF4-8C51-D5EE80C62123",
valuelistID:"F6D88DD2-B460-48B8-9EC5-BF53D194215F"
},
{
imageMediaID:"5C432BE9-5CB5-48FB-A4BE-25A25C33D471",
location:"180,52",
mediaOptions:1,
onActionMethodID:"8B3EA105-8B17-4315-A4DE-6B5B6EC52E36",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Grabar",
typeid:7,
uuid:"6A3B077B-BB70-4CAD-B6DD-969D830E97B2"
},
{
labelFor:"",
location:"30,240",
size:"80,20",
styleClass:"label_black",
text:"Observación:",
typeid:7,
uuid:"6E34C429-B87F-46D3-9E41-DC17B5E7BB82"
},
{
dataProviderID:"mov_descripcion",
location:"113,141",
size:"397,20",
text:"Mov Descripcion",
typeid:4,
uuid:"7783B966-415A-4D99-9E5D-5124842F4B38"
},
{
background:"#ffffa6",
dataProviderID:"mov_anio_emision",
editable:false,
horizontalAlignment:4,
location:"641,141",
size:"158,20",
text:"Mov Anio Emision",
typeid:4,
uuid:"78518E7B-76C9-4A40-A3E4-5E2826EEC0EB",
valuelistID:"97C211F8-7C9E-41D2-8890-E4EDB38B2F2A"
},
{
background:"#ffffa6",
dataProviderID:"mov_mes_emision",
editable:false,
location:"641,166",
size:"158,20",
text:"Mov Mes Emision",
typeid:4,
uuid:"A9FAEBF6-F087-4FC7-B319-10C2A94DDA4E",
valuelistID:"D30961D6-B67C-49E0-87BD-6E7EEBD46F2A"
},
{
height:545,
partType:5,
typeid:19,
uuid:"ACCC8C26-442F-4503-B490-DAF4B60047BC"
},
{
imageMediaID:"B59F00BB-DE87-490B-92E9-55F93601EEA5",
location:"35,52",
mediaOptions:1,
onActionMethodID:"DADF8BD8-CA4E-40DD-9127-111ABB126E7B",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Volver",
typeid:7,
uuid:"AE70C2F1-6BB9-498D-81EA-11C73B0CF9FE"
},
{
horizontalAlignment:4,
labelFor:"",
location:"30,166",
size:"80,20",
styleClass:"label_black",
text:"Estado:",
typeid:7,
uuid:"B970C641-3EB2-494F-8445-7859241D7D35"
},
{
dataProviderID:"mov_estado",
displayType:2,
editable:false,
location:"113,166",
size:"140,20",
text:"Mov Estado",
typeid:4,
uuid:"C7D5B0D6-C45D-4A8D-8E4D-BB55765EAFD7",
valuelistID:"9520E02A-25CC-4A50-BE74-9805224A65CF"
},
{
horizontalAlignment:4,
labelFor:"",
location:"525,166",
size:"114,20",
styleClass:"label_black",
text:"Mes:",
typeid:7,
uuid:"CC464D60-6355-49CB-9784-AD7DC06067B5"
},
{
horizontalAlignment:4,
labelFor:"",
location:"525,116",
size:"114,20",
styleClass:"label_black",
text:"Tipo De Movim.:",
typeid:7,
uuid:"CDBB8B4F-E180-4E40-95F2-D0BFB519219B"
},
{
horizontalAlignment:4,
labelFor:"",
location:"30,191",
size:"80,20",
styleClass:"label_black",
text:"1° Vto.:",
typeid:7,
uuid:"D1AC3FE4-1548-4ED6-A062-1A1E3E737FB0"
},
{
background:"#ffffa6",
dataProviderID:"mov_importe_2vto",
editable:false,
format:"#,###.00",
horizontalAlignment:4,
location:"350,215",
size:"136,20",
text:"Mov Importe",
typeid:4,
uuid:"D3BD379E-5454-4355-A687-53A36E378D39"
},
{
horizontalAlignment:4,
labelFor:"",
location:"525,141",
size:"114,20",
styleClass:"label_black",
text:"Año:",
typeid:7,
uuid:"E45D058C-6FEE-4F16-8144-8AD146BDD59B"
}
],
name:"mat_movimientos_nuevo_manual",
navigatorID:"-1",
onShowMethodID:"AF8A6E88-995C-481E-A88E-AB7BF0354B28",
showInMenu:true,
size:"810,480",
styleClass:"formulario",
styleName:"id_style",
typeid:3,
uuid:"F8C01BA1-C1F1-4754-8CCB-44A9D703A31A"