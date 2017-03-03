dataSource:"db:/sistemas/mat_rel_mat_conv",
items:[
{
dataProviderID:"rel_estado",
editable:false,
formIndex:23,
horizontalAlignment:0,
location:"310,56",
name:"rel_estado",
size:"114,20",
styleClass:"table_field",
typeid:4,
uuid:"07385C15-3D6C-4915-9967-E5FFF2A9FD5E",
valuelistID:"74260160-0789-4C78-B706-93AE7DD771F2"
},
{
formIndex:24,
labelFor:"rel_observaciones",
location:"450,36",
name:"rel_observaciones_label",
size:"241,20",
styleClass:"table_label",
text:"Observaciones",
typeid:7,
uuid:"0E76494C-BC99-4918-8FFE-965DB0102A81"
},
{
formIndex:20,
labelFor:"convenio_id",
location:"89,36",
name:"convenio_id_label",
size:"221,20",
styleClass:"table_label",
text:"Descripción",
typeid:7,
uuid:"1CEF2513-02A8-4608-81DC-C78FA92FA424"
},
{
anchors:15,
formIndex:17,
items:[
{
containsFormID:"29B360C1-B721-45A4-92EA-604B8E16A1D3",
location:"0,501",
relationName:"mat_rel_mat_conv_to_mat_movimientos",
text:"sm_frm_matriculados_convenios_cuotas",
typeid:15,
uuid:"9FD10A3A-E180-4F8D-A49A-3B27DFE79EE2"
}
],
location:"0,471",
name:"tabsc",
printable:false,
size:"1061,146",
transparent:true,
typeid:16,
uuid:"4B5C6131-DD30-4D8D-8F5C-928963CF8A3B"
},
{
dataProviderID:"rel_id",
editable:false,
formIndex:19,
horizontalAlignment:0,
location:"30,56",
name:"rel_id",
size:"60,20",
styleClass:"table_field",
typeid:4,
uuid:"5B950E6B-EDE6-4AA8-99E6-431E9F4A169A"
},
{
formIndex:18,
labelFor:"rel_id",
location:"30,36",
name:"rel_id_label",
size:"60,20",
styleClass:"table_label",
text:"ID",
typeid:7,
uuid:"6274D891-7AA5-49D5-B515-87022C0DF97B"
},
{
anchors:15,
formIndex:17,
items:[
{
containsFormID:"36D67920-F74B-4B09-A6F9-F999D04E1F73",
location:"26,309",
relationName:"mat_rel_mat_conv_to_mat_rel_conv_movi",
text:"sm_frm_matriculados_convenios_afectaciones",
typeid:15,
uuid:"82E65AC2-F102-443A-8D8E-E361B3830A24"
}
],
location:"0,275",
name:"tabs",
printable:false,
size:"1061,160",
transparent:true,
typeid:16,
uuid:"6ADD803C-10D9-410D-8C8E-1D366203AA90"
},
{
dataProviderID:"rel_observaciones",
editable:false,
formIndex:25,
location:"450,56",
name:"rel_observaciones",
size:"241,20",
styleClass:"table_field",
typeid:4,
uuid:"85DD0392-EE66-4403-85BC-6A94FDAD99B7"
},
{
height:241,
partType:5,
typeid:19,
uuid:"966C902E-483E-4716-A2C6-715063DC1CCE"
},
{
anchors:11,
location:"0,439",
size:"1061,27",
styleClass:"sub_banner",
text:"Boletas/Cuotas del Convenio",
transparent:true,
typeid:7,
uuid:"9B9A58F3-E9D7-4176-A266-8F5AF6E7ACED"
},
{
height:617,
partType:8,
typeid:19,
uuid:"9F79EAE9-CFF8-4A11-B61A-CCFB7C65C8A7"
},
{
anchors:11,
location:"0,245",
size:"1061,27",
styleClass:"sub_banner",
text:"Boletas Afectadas al Convenio",
transparent:true,
typeid:7,
uuid:"9FB290EB-3109-44EC-B800-91556401D813"
},
{
dataProviderID:"convenio_id",
editable:false,
formIndex:21,
location:"89,56",
name:"convenio_id",
size:"221,20",
styleClass:"table_field",
typeid:4,
uuid:"ADD2FD06-CF17-422C-B414-BCBE9FB93B1D",
valuelistID:"10EDE4B6-E83A-4827-B515-650E0E87E76A"
},
{
formIndex:22,
labelFor:"rel_estado",
location:"310,36",
name:"rel_estado_label",
size:"114,20",
styleClass:"table_label",
text:" Estado",
typeid:7,
uuid:"BFD3021F-3766-4F3A-ABF5-69D0B3F6E32B"
},
{
borderType:"EmptyBorder,0,0,0,0",
enabled:false,
formIndex:4,
imageMediaID:"0E4EAC8B-534A-4773-A300-0556D9E21A1A",
location:"0,61",
mediaOptions:6,
onActionMethodID:"0174F8B9-084E-496A-A551-D9CB5F0AE398",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
showClick:false,
size:"20,20",
toolTipText:"Editar Registro",
transparent:true,
typeid:7,
uuid:"C4153176-BD30-4B19-AAAF-4FD17AE9DF87"
},
{
height:31,
partType:1,
typeid:19,
uuid:"E6D48A2E-FE54-4416-A53E-2C545E37F762"
},
{
anchors:11,
location:"0,0",
size:"1061,27",
styleClass:"sub_banner",
text:"Convenios",
transparent:true,
typeid:7,
uuid:"FFD110AD-D78C-4F3E-AB84-8E373B8C728A"
}
],
name:"sm_frm_matriculados_convenios",
showInMenu:true,
size:"1061,681",
styleClass:"table",
styleName:"id_style",
typeid:3,
uuid:"F2723CF1-FBFB-474A-A81A-EA1D23ABFD59",
view:3