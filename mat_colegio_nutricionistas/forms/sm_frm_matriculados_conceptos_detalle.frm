dataSource:"db:/sistemas/mat_matriculado_rel_ingresos",
items:[
{
formIndex:3,
horizontalAlignment:2,
imageMediaID:"492E6F14-8334-48EB-8565-73505985E0B1",
location:"402,282",
mediaOptions:1,
name:"btn_borrar",
onActionMethodID:"182AD21C-4108-4E81-A185-B8C0FBBC2D97",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"105,30",
text:"Borrar",
typeid:7,
uuid:"17FC8F7C-D29D-4663-8342-54B03AEBB66A"
},
{
height:338,
partType:5,
typeid:19,
uuid:"1C1C5926-6FA0-4322-B4C9-48421DD017D6"
},
{
labelFor:"ingr_id",
location:"9,68",
size:"125,20",
styleClass:"label_black",
text:"Concepto:",
typeid:7,
uuid:"1D4DD90B-FEC8-49A6-A1B0-2E590294D265"
},
{
labelFor:"rel_aplica_vigencia",
location:"9,118",
size:"125,20",
styleClass:"label_black",
text:"Aplica Vigencia:",
typeid:7,
uuid:"30D19887-523E-489D-9154-03838A781FDD"
},
{
dataProviderID:"rel_observaciones",
displayType:1,
location:"135,143",
name:"rel_observaciones",
scrollbars:32,
size:"409,104",
typeid:4,
uuid:"564A8B9C-455E-4522-BBDA-5AA2383DA6D8"
},
{
labelFor:"rel_observaciones",
location:"9,143",
size:"125,20",
styleClass:"label_black",
text:"Observaciones",
typeid:7,
uuid:"69C940A2-56BB-4DEC-8AF8-2B7587E8D4F3"
},
{
labelFor:"rel_descuento",
location:"9,93",
size:"125,20",
styleClass:"label_black",
text:"Descuento:",
typeid:7,
uuid:"72F267B2-313C-48DC-8F60-B7B1082FB225",
visible:false
},
{
anchors:11,
displaysTags:true,
location:"0,0",
size:"561,27",
styleClass:"sub_banner",
text:"%%vl_titulo%% Concepto",
transparent:true,
typeid:7,
uuid:"8060A615-A17E-48BE-B610-402CFB6B44CE"
},
{
formIndex:3,
horizontalAlignment:2,
imageMediaID:"5C432BE9-5CB5-48FB-A4BE-25A25C33D471",
location:"285,282",
mediaOptions:1,
onActionMethodID:"22BF1241-8F0D-4661-846D-6F7FB65BDE87",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"105,30",
text:"Grabar",
typeid:7,
uuid:"82A3357A-922D-48E4-8883-7F9CAF8D8F37"
},
{
dataProviderID:"rel_aplica_vigencia",
displayType:4,
horizontalAlignment:0,
location:"135,118",
name:"rel_aplica_vigencia",
onDataChangeMethodID:"86BDE0D6-668B-4E27-BC6C-066D9867BABB",
size:"48,20",
typeid:4,
uuid:"85AA7F86-9A7A-4252-BEAB-2A3B7819BCAE"
},
{
dataProviderID:"ingr_id",
displayType:10,
location:"135,68",
name:"ingr_id",
size:"234,20",
typeid:4,
uuid:"9873E0CC-CBA3-422F-BB4C-18F1729BEA05",
valuelistID:"5F4BF39A-BC0E-447D-A37F-E3392E0B35C1"
},
{
dataProviderID:"rel_fec_final",
displayType:5,
format:"dd/MM/yyyy|mask",
horizontalAlignment:0,
location:"434,118",
name:"rel_fec_final",
size:"110,20",
typeid:4,
uuid:"AA79C5BE-8B12-4C2E-BD5A-213605880E99"
},
{
dataProviderID:"rel_descuento",
format:"#0.00",
horizontalAlignment:4,
location:"135,93",
name:"rel_descuento",
size:"80,20",
typeid:4,
uuid:"B5CA6914-0428-4A4F-9827-7A98CCD46B1D",
visible:false
},
{
height:50,
partType:1,
typeid:19,
uuid:"BB87F6EA-535F-4D5F-9FA8-FA407714EBF7"
},
{
labelFor:"rel_fec_final",
location:"375,118",
size:"58,20",
styleClass:"label_black",
text:"Hasta:",
typeid:7,
uuid:"BDD9C798-C686-4CFE-9433-391F1B5000B4"
},
{
dataProviderID:"rel_estado",
displayType:2,
editable:false,
location:"434,68",
name:"rel_estado",
size:"110,20",
typeid:4,
uuid:"BE72B8E5-DE0A-4D6F-A37C-02FD91160580",
valuelistID:"3B1B177E-FAE2-410C-BDBA-F701383F4FF9"
},
{
dataProviderID:"rel_fec_inicial",
displayType:5,
format:"dd/MM/yyyy|mask",
horizontalAlignment:0,
location:"256,118",
name:"rel_fec_inicial",
size:"110,20",
typeid:4,
uuid:"D2AA36B3-1A45-487F-943F-47E0C1705179"
},
{
labelFor:"rel_fec_inicial",
location:"197,118",
size:"58,20",
styleClass:"label_black",
text:"Desde:",
typeid:7,
uuid:"E4E70C29-D4BD-4794-873E-A5DDC412D1AD"
},
{
formIndex:2,
horizontalAlignment:2,
imageMediaID:"B59F00BB-DE87-490B-92E9-55F93601EEA5",
location:"166,282",
mediaOptions:1,
onActionMethodID:"B3E69CAF-F809-4BEE-8642-190BAA1DD536",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"105,30",
text:"Volver",
typeid:7,
uuid:"E618F8BF-AA04-42F7-A50D-76A5768BB4F0"
},
{
labelFor:"rel_estado",
location:"375,68",
size:"58,20",
styleClass:"label_black",
text:"Estado:",
typeid:7,
uuid:"F5DDCCDC-263F-4096-B14F-EB084E21AF84"
}
],
name:"sm_frm_matriculados_conceptos_detalle",
navigatorID:"-1",
onHideMethodID:"3EBE0A6F-2814-4265-9E4C-FB1FCCAB0824",
onShowMethodID:"9B57DCC1-5D75-4110-843C-06DD2628FAB1",
showInMenu:true,
size:"561,480",
styleClass:"table",
styleName:"id_style",
typeid:3,
uuid:"9827331F-D09B-4290-B0C4-CB964C74E82B"