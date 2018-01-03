dataSource:"db:/sistemas/alqyser_contratos",
items:[
{
formIndex:5,
labelFor:"aggr_cantidad",
location:"28,457",
name:"aggr_cantidad_label",
size:"74,20",
styleClass:"label_black",
text:"Cantidad:",
typeid:7,
uuid:"01EC2DDD-1EDF-436E-A6C2-6E746DFE06DA"
},
{
dataProviderID:"alqyser_contratos_to_alqyser_inquilinos.alqyser_inquilinos_to_vc_clientes.cliente_nombre",
editable:false,
location:"608,74",
name:"cliente_nombre",
size:"277,20",
styleClass:"table_field",
typeid:4,
uuid:"22EDF820-E60C-4341-840D-7E63F8FBC1B5"
},
{
labelFor:"contrato_fec_fin",
location:"168,54",
name:"contrato_fec_fin_label",
size:"124,20",
styleClass:"table_label",
text:"Fec. Inicio",
typeid:7,
uuid:"2466E94A-6131-4874-BD24-060ABF8DA2DA"
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
uuid:"32556F81-E37D-4C5C-B2AB-57BF27C08E1F"
},
{
anchors:11,
location:"0,0",
size:"934,30",
styleClass:"sub_banner",
text:"Historial de Contratos",
typeid:7,
uuid:"3F34AF02-0FC7-4AC8-8720-C5700517577D"
},
{
height:445,
partType:5,
typeid:19,
uuid:"61B32567-4821-4037-B4DE-61EA86ED2329"
},
{
labelFor:"contrato_estado",
location:"452,54",
name:"contrato_estado_label",
size:"140,20",
styleClass:"table_label",
text:"Estado",
typeid:7,
uuid:"69A87038-3A84-444E-B124-3B7B17ECD53E"
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
uuid:"7E361087-4812-48F6-B2A8-313648F2A0F0",
visible:false
},
{
labelFor:"contrato_numero",
location:"31,54",
name:"contrato_numero_label",
size:"140,20",
styleClass:"table_label",
text:"Contrato N°",
typeid:7,
uuid:"962E9C3A-E6A0-4F00-BAF8-EBD83B5B7403"
},
{
labelFor:"contrato_fec_ini",
location:"292,54",
name:"contrato_fec_ini_label",
size:"124,20",
styleClass:"table_label",
text:"Fec. Fin",
typeid:7,
uuid:"A9ECA685-ED5F-4BCA-8580-EC3BDC28182C"
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
uuid:"ABA313D0-7EA4-4B99-85AC-85763A85AA32"
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
uuid:"AC6591BE-3F30-4A47-B2B5-F27F5F89B13B",
valuelistID:"E7B5354D-00BE-416F-B817-F063FC8E6E58"
},
{
height:490,
partType:8,
typeid:19,
uuid:"AD7F57DB-ADEB-4CF5-9AE8-44DF560B7772"
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
uuid:"B520BAB9-47D0-4F22-8A1C-E7D547632480"
},
{
labelFor:"cliente_nombre",
location:"608,54",
name:"cliente_nombre_label",
size:"277,20",
styleClass:"table_label",
text:"Inquilino",
typeid:7,
uuid:"B894D5F9-F047-4C6C-B860-3F21420F63D7"
},
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
uuid:"C8A72E30-A198-40A6-A78C-679399AD830B",
visible:false
},
{
height:50,
partType:1,
typeid:19,
uuid:"E2C785D2-5471-4711-B5CC-34CA6C8D995F"
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
uuid:"E68F1BBA-2650-4CFA-B19F-10BC9885E26F"
},
{
anchors:11,
location:"0,447",
size:"934,38",
styleClass:"banner_pie",
transparent:true,
typeid:7,
uuid:"EF6EFBD4-C990-4AD5-928B-7CD84236C3D0"
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
uuid:"F07120C2-DA07-4D0A-9BD0-5C80220ACCCD"
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
uuid:"F982F6B8-66EC-46B3-B676-3A724E0F1B68"
}
],
name:"ays_frm_inmuebles_contratos",
navigatorID:"-1",
showInMenu:true,
size:"934,480",
styleClass:"table",
styleName:"id_style",
typeid:3,
uuid:"375BA2AA-89AF-4B3D-9AE7-6878E5FE3074",
view:3