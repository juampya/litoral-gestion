dataSource:"db:/sistemas/alqyser_contratos",
items:[
{
imageMediaID:"BD213790-1D73-481C-8B7F-2F43AFBAAF97",
location:"251,4",
mediaOptions:1,
name:"btn_agregar",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,20",
text:"Agregar",
typeid:7,
uuid:"0064D9CB-9E88-4546-9658-042865741AD3",
visible:false
},
{
formIndex:5,
labelFor:"aggr_cantidad",
location:"28,457",
name:"aggr_cantidad_label",
size:"74,20",
styleClass:"label_black",
text:"Cantidad:",
typeid:7,
uuid:"1157D29C-CE93-42CD-AAEC-37D64C1FCF63"
},
{
dataProviderID:"contrato_estado",
editable:false,
horizontalAlignment:0,
location:"452,74",
name:"contrato_estado",
size:"140,20",
styleClass:"table_field",
typeid:4,
uuid:"2D292FBA-0BD6-447D-9623-4416FE2488A7",
valuelistID:"E7B5354D-00BE-416F-B817-F063FC8E6E58"
},
{
dataProviderID:"alqyser_contratos_to_alqyser_inquilinos.alqyser_inquilinos_to_vc_clientes.cliente_nombre",
editable:false,
location:"608,74",
name:"cliente_nombre",
size:"277,20",
styleClass:"table_field",
typeid:4,
uuid:"37CF5757-7CF1-4D73-B50E-27EBA74D0F25"
},
{
anchors:11,
location:"0,447",
size:"934,38",
styleClass:"banner_pie",
transparent:true,
typeid:7,
uuid:"39E3F4A6-4163-42D3-A7DB-C61A39327CA7"
},
{
height:50,
partType:1,
typeid:19,
uuid:"40E661D0-FA7A-4A87-9DB1-CBEFE3532787"
},
{
labelFor:"cliente_nombre",
location:"608,54",
name:"cliente_nombre_label",
size:"277,20",
styleClass:"table_label",
text:"Inquilino",
typeid:7,
uuid:"44A56E76-9843-4287-9408-D8FB9400B921"
},
{
dataProviderID:"contrato_numero",
editable:false,
horizontalAlignment:0,
location:"31,74",
name:"contrato_numero",
size:"140,20",
styleClass:"table_field",
typeid:4,
uuid:"4908C890-C3A8-4FBC-9B3A-0EBE72E8E439"
},
{
imageMediaID:"215F84EA-D58C-4A1C-9C79-A197FBA32FAE",
location:"391,4",
mediaOptions:1,
mnemonic:"",
name:"btn_refrescar",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,20",
text:"Refrescar",
typeid:7,
uuid:"540F36BE-E079-4590-96BB-5963092D0D73",
visible:false
},
{
height:445,
partType:5,
typeid:19,
uuid:"583D0152-55B2-43EF-91B1-E2AD486B47CF"
},
{
anchors:11,
location:"0,0",
size:"934,30",
styleClass:"sub_banner",
text:"Historial de Contratos",
typeid:7,
uuid:"75044374-B41D-4074-90BC-762FC514A7ED"
},
{
borderType:"EmptyBorder,0,0,0,0",
imageMediaID:"492E6F14-8334-48EB-8565-73505985E0B1",
location:"910,74",
mediaOptions:1,
name:"btn_borrar",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"20,20",
transparent:true,
typeid:7,
uuid:"8CD13C99-5B1F-40E3-A95D-0D957FB274B1"
},
{
labelFor:"contrato_numero",
location:"31,54",
name:"contrato_numero_label",
size:"140,20",
styleClass:"table_label",
text:"Contrato N°",
typeid:7,
uuid:"9EEE754A-ABE3-4FDD-9707-E8C7E6370585"
},
{
borderType:"EmptyBorder,0,0,0,0",
imageMediaID:"914FDFA0-7C3E-4468-8671-B96FACB2917B",
location:"10,74",
mediaOptions:1,
name:"btn_editar",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"20,20",
transparent:true,
typeid:7,
uuid:"A8E57C1B-2C37-4C95-85E1-054D2489C58C"
},
{
dataProviderID:"contrato_fec_fin",
editable:false,
format:"dd/MM/yyyy",
horizontalAlignment:0,
location:"168,74",
name:"contrato_fec_fin",
size:"124,20",
styleClass:"table_field",
typeid:4,
uuid:"B0C94222-365D-4FFB-8B88-390A73F3C537"
},
{
height:490,
partType:8,
typeid:19,
uuid:"B3DE5417-0BA1-4134-83C7-FF032CCC34E2"
},
{
labelFor:"contrato_estado",
location:"452,54",
name:"contrato_estado_label",
size:"140,20",
styleClass:"table_label",
text:"Estado",
typeid:7,
uuid:"B419C9DC-42E0-4B88-858A-2C38ED52C85B"
},
{
dataProviderID:"contrato_fec_ini",
editable:false,
format:"dd/MM/yyyy",
horizontalAlignment:0,
location:"292,74",
name:"contrato_fec_ini",
size:"124,20",
styleClass:"table_field",
typeid:4,
uuid:"C582A1A7-F538-4B57-B01D-9CFD00B5DFAA"
},
{
dataProviderID:"aggr_cantidad",
editable:false,
formIndex:6,
horizontalAlignment:0,
location:"106,457",
name:"aggr_cantidad",
size:"72,20",
styleClass:"disable",
typeid:4,
uuid:"CA00BE96-4C4B-48E2-8497-D01BEFAAFD39"
},
{
labelFor:"contrato_fec_ini",
location:"292,54",
name:"contrato_fec_ini_label",
size:"124,20",
styleClass:"table_label",
text:"Fec. Fin",
typeid:7,
uuid:"F3F36EBD-EB3A-4BA8-99EF-78322B555F6D"
},
{
labelFor:"contrato_fec_fin",
location:"168,54",
name:"contrato_fec_fin_label",
size:"124,20",
styleClass:"table_label",
text:"Fec. Inicio",
typeid:7,
uuid:"FDF9100A-9AF5-4D85-8F1C-C2A4A9CB7C6B"
}
],
name:"ays_frm_inquilinos_contratos",
navigatorID:"-1",
showInMenu:true,
size:"934,480",
styleClass:"table",
styleName:"id_style",
typeid:3,
uuid:"9DE1DC97-DC36-45AD-91F4-BBDE71D7D990",
view:3