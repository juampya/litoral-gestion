dataSource:"db:/sistemas/biblio_libros",
items:[
{
anchors:11,
dataProviderID:"libro_id",
editable:false,
formIndex:6,
horizontalAlignment:0,
location:"25,155",
name:"libro_id",
size:"67,20",
styleClass:"table_field",
typeid:4,
uuid:"0995B9DA-7D63-4231-8C11-EE8FFF89DB0C"
},
{
dataProviderID:"vl_autor",
displayType:10,
formIndex:36,
location:"66,83",
onDataChangeMethodID:"AA4E76FF-2D79-4DE4-B8B9-3C9EE188C874",
size:"309,20",
typeid:4,
uuid:"0BDD095F-18FF-4B3E-AD49-CE4E4FE49F32",
valuelistID:"E6FCE4E1-6918-44D5-8F89-D649328AF936"
},
{
formIndex:15,
labelFor:"libro_codigo",
location:"92,135",
name:"libro_codigo_label",
size:"117,20",
styleClass:"table_label",
text:"Código",
typeid:7,
uuid:"13B4F084-5D08-4860-91A3-427149816043"
},
{
formIndex:29,
labelFor:"edito_id",
location:"492,135",
name:"edito_id_label",
size:"248,20",
styleClass:"table_label",
text:"Editorial",
typeid:7,
uuid:"1CBBA340-3829-494B-A05D-78463C7A0CFF"
},
{
anchors:11,
dataProviderID:"libro_fecha_publicacion",
editable:false,
formIndex:28,
format:"dd/MM/yyyy",
horizontalAlignment:0,
location:"1118,155",
name:"libro_fecha_publicacion",
size:"117,20",
styleClass:"table_field",
typeid:4,
uuid:"1E72422A-8845-405E-80E8-9309552E5D17"
},
{
formIndex:1,
imageMediaID:"215F84EA-D58C-4A1C-9C79-A197FBA32FAE",
location:"275,37",
mediaOptions:1,
onActionMethodID:"71E94D3C-3137-4EF4-A2C1-C454DABAAB19",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Refrescar",
typeid:7,
uuid:"1EB358BB-0BB7-4F3B-ADBB-988C2D0A4E0D"
},
{
formIndex:27,
labelFor:"libro_fecha_publicacion",
location:"1118,135",
name:"libro_fecha_publicacion_label",
size:"117,20",
styleClass:"table_label",
text:"Fec.Publicación",
typeid:7,
uuid:"2DCE09CE-1760-443D-81E7-680C83C83056"
},
{
formIndex:41,
location:"579,83",
size:"57,20",
styleClass:"label_black",
text:" Estado:",
typeid:7,
uuid:"30233693-DD32-41DC-896C-6031BBAD0871"
},
{
dataProviderID:"vl_estado",
displayType:2,
editable:false,
formIndex:42,
location:"640,83",
onDataChangeMethodID:"AA4E76FF-2D79-4DE4-B8B9-3C9EE188C874",
size:"140,20",
typeid:4,
uuid:"37529346-D337-43C9-8B5C-B101D3A3B9A9",
valuelistID:"B61510B7-E8DA-4257-881C-BE95AF860AB8"
},
{
dataProviderID:"vl_titulo",
formIndex:44,
location:"441,105",
onDataChangeMethodID:"AA4E76FF-2D79-4DE4-B8B9-3C9EE188C874",
size:"339,20",
typeid:4,
uuid:"4475DCF9-5AC3-4CF5-BBB0-D2E5B034C8E8"
},
{
dataProviderID:"vl_editorial",
displayType:10,
formIndex:40,
location:"66,105",
onDataChangeMethodID:"AA4E76FF-2D79-4DE4-B8B9-3C9EE188C874",
size:"309,20",
typeid:4,
uuid:"53603ACF-F559-462E-8EA8-4787ACA508A8",
valuelistID:"DCCF5182-8EB5-4477-BE34-DB7564A8E0CC"
},
{
dataProviderID:"biblio_libros_to_mat_rel_mat_libros_por_relacion.calc_libro_fecha_est_devol",
editable:false,
formIndex:50,
format:"dd/MM/yyyy",
horizontalAlignment:0,
location:"1717,155",
name:"calc_libro_fecha_est_devol",
size:"105,20",
styleClass:"table_field",
typeid:4,
uuid:"5A040CCD-F77E-4120-B3E5-9D8AA8F61B13"
},
{
height:480,
partType:5,
typeid:19,
uuid:"5BE9A724-14F6-4DD1-ABD0-EB06F94CB760"
},
{
anchors:11,
dataProviderID:"libro_edicion",
editable:false,
formIndex:20,
horizontalAlignment:0,
location:"1013,155",
name:"libro_edicion",
size:"33,20",
styleClass:"table_field",
typeid:4,
uuid:"5F9409F7-517E-4CBD-8175-0F8CC36DC31D"
},
{
anchors:11,
dataProviderID:"autor_id",
editable:false,
formIndex:32,
location:"739,155",
name:"autor_id",
size:"273,20",
styleClass:"table_field",
typeid:4,
uuid:"61037A40-B858-4304-BEAD-FA9A26246B2A",
valuelistID:"E6FCE4E1-6918-44D5-8F89-D649328AF936"
},
{
formIndex:49,
labelFor:"calc_libro_fecha_est_devol",
location:"1717,135",
name:"calc_libro_fecha_est_devol_label",
size:"105,20",
styleClass:"table_label",
text:"A Devolver el",
typeid:7,
uuid:"6F25D516-F0A6-4F68-BD54-110C804A73A7"
},
{
anchors:11,
location:"0,0",
size:"1823,80",
styleClass:"banner",
text:"Libros",
transparent:true,
typeid:7,
uuid:"783F0560-76D1-4E9F-837E-EEFF68E64957"
},
{
formIndex:45,
labelFor:"mat_nombre",
location:"1332,135",
name:"mat_nombre_label",
size:"247,20",
styleClass:"table_label",
text:"En Poder de",
typeid:7,
uuid:"7875DAAC-AF99-4795-A057-ED291E845CF2"
},
{
dataProviderID:"vl_codigo",
formIndex:38,
location:"441,83",
onDataChangeMethodID:"AA4E76FF-2D79-4DE4-B8B9-3C9EE188C874",
size:"130,20",
typeid:4,
uuid:"83540804-ABC2-45B4-9095-322EFE54FE5C"
},
{
formIndex:1,
imageMediaID:"1C7CA271-A29A-4386-B1BE-7BD7135FF765",
location:"410,37",
mediaOptions:1,
name:"btn_prestar",
onActionMethodID:"B9F9611B-EED2-4BCA-8915-0842CA8100C2",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Prestar Libro",
typeid:7,
uuid:"86C6CC8C-4E67-43B8-9A46-8D2D14DFD66E"
},
{
formIndex:3,
imageMediaID:"B59F00BB-DE87-490B-92E9-55F93601EEA5",
location:"5,37",
mediaOptions:1,
onActionMethodID:"7F6D3F66-9484-45CC-ADF9-ED157A9CEE36",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Volver",
typeid:7,
uuid:"8CF3B2CB-A41B-4BC6-AE9F-F8397C006653"
},
{
anchors:11,
dataProviderID:"libro_tomo",
editable:false,
formIndex:24,
horizontalAlignment:0,
location:"1077,155",
name:"libro_tomo",
size:"40,20",
styleClass:"table_field",
typeid:4,
uuid:"8D879CA0-1D75-49B6-AC46-E4137FD1EF0B"
},
{
formIndex:47,
labelFor:"rel_fecha_salida",
location:"1577,135",
name:"rel_fecha_salida_label",
size:"140,20",
styleClass:"table_label",
text:"Fecha Salida",
typeid:7,
uuid:"93612427-8F37-4EEB-BEC0-82B668B7EE72"
},
{
formIndex:1,
imageMediaID:"03383AAB-4258-4BE2-9CD5-F37919DFAA92",
location:"545,37",
mediaOptions:1,
mnemonic:"",
name:"btn_devolver",
onActionMethodID:"2148D9A5-9BDD-489C-B221-804B57BFD79F",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Devolver Libro",
typeid:7,
uuid:"93786227-B7B4-4DB8-918F-8B119916E18F"
},
{
formIndex:37,
location:"381,83",
size:"57,20",
styleClass:"label_black",
text:"Código:",
typeid:7,
uuid:"97B0C099-E73E-419F-AEAB-7C9C97994A0C"
},
{
formIndex:31,
labelFor:"autor_id",
location:"739,135",
name:"autor_id_label",
size:"273,20",
styleClass:"table_label",
text:"Autor",
typeid:7,
uuid:"A054A054-DD9E-468F-B787-DC0C0930E1EB"
},
{
borderType:"EmptyBorder,0,0,0,0",
formIndex:4,
imageMediaID:"0E4EAC8B-534A-4773-A300-0556D9E21A1A",
location:"0,154",
mediaOptions:6,
onActionMethodID:"E79944F0-4E18-4378-A745-B02C7C695E5D",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
showClick:false,
size:"20,20",
transparent:true,
typeid:7,
uuid:"A23249EA-BA60-407C-BF9F-71DBEAEEF960"
},
{
formIndex:35,
location:"5,83",
size:"57,20",
styleClass:"label_black",
text:"Autor:",
typeid:7,
uuid:"A655343B-0A18-443C-9B6A-114057C04276"
},
{
formIndex:33,
labelFor:"libro_estado",
location:"1236,135",
name:"libro_estado_label",
size:"97,20",
styleClass:"table_label",
text:"Estado",
typeid:7,
uuid:"A956C5FD-FDE7-431E-91F4-846E8A67872E"
},
{
height:127,
partType:1,
typeid:19,
uuid:"A98B3CE0-7AFD-44A6-9071-AFEA1618160D"
},
{
dataProviderID:"libro_estado",
editable:false,
formIndex:34,
horizontalAlignment:0,
location:"1236,155",
name:"libro_estado",
size:"97,20",
styleClass:"table_field",
typeid:4,
uuid:"B367983C-FF61-4BCC-828B-44B519DC1999",
valuelistID:"B61510B7-E8DA-4257-881C-BE95AF860AB8"
},
{
formIndex:5,
labelFor:"libro_id",
location:"25,135",
name:"libro_id_label",
size:"67,20",
styleClass:"table_label",
text:"ID",
typeid:7,
uuid:"B4284873-284F-4A72-97B1-A2026C2F06D1"
},
{
anchors:11,
dataProviderID:"libro_titulo",
editable:false,
formIndex:22,
location:"207,155",
name:"libro_titulo",
size:"285,20",
styleClass:"table_field",
typeid:4,
uuid:"B5CBC9D8-5575-47D1-AFAB-3DEA04FD7B76"
},
{
formIndex:23,
labelFor:"libro_tomo",
location:"1077,135",
name:"libro_tomo_label",
size:"40,20",
styleClass:"table_label",
text:"Tomo",
typeid:7,
uuid:"C48D19C1-022B-4668-B254-763C68993534"
},
{
formIndex:21,
labelFor:"libro_titulo",
location:"207,135",
name:"libro_titulo_label",
size:"285,20",
styleClass:"table_label",
text:"Título",
typeid:7,
uuid:"CD493613-1B61-47B3-8AF9-2C45B53FB828"
},
{
dataProviderID:"biblio_libros_to_mat_rel_mat_libros_por_relacion.rel_fecha_salida",
editable:false,
formIndex:48,
format:"dd-MM-yyyy HH:mm",
horizontalAlignment:0,
location:"1577,155",
name:"rel_fecha_salida",
size:"140,20",
styleClass:"table_field",
typeid:4,
uuid:"D0FE2431-804A-4EEA-A50C-B3DE7DE79F77"
},
{
anchors:11,
dataProviderID:"libro_volumen",
editable:false,
formIndex:26,
horizontalAlignment:0,
location:"1046,155",
name:"libro_volumen",
size:"30,20",
styleClass:"table_field",
typeid:4,
uuid:"D6B38795-83C6-46A8-9EC4-887DE51527B3"
},
{
formIndex:2,
imageMediaID:"382776FF-9225-46C5-9AB8-3377B48C7283",
location:"140,37",
mediaOptions:1,
onActionMethodID:"E5064233-256C-4D52-9B0D-FD9D2FDAF238",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Nuevo",
typeid:7,
uuid:"DA9B55F3-205C-428E-BF41-3C89FEC0D989"
},
{
anchors:11,
dataProviderID:"libro_codigo",
editable:false,
formIndex:16,
horizontalAlignment:0,
location:"92,155",
name:"libro_codigo",
size:"117,20",
styleClass:"table_field",
typeid:4,
uuid:"DCA4AC06-4A17-4DF8-9FA8-E6F82D4AF051"
},
{
dataProviderID:"biblio_libros_to_mat_rel_mat_libros_por_relacion.mat_rel_mat_libros_to_mat_matriculados.mat_nombre",
editable:false,
formIndex:46,
location:"1332,155",
name:"mat_nombre",
size:"247,20",
styleClass:"table_field",
typeid:4,
uuid:"E1FE6730-BE11-4211-A25B-DA7C6856E8D0"
},
{
anchors:11,
dataProviderID:"edito_id",
editable:false,
formIndex:30,
location:"492,155",
name:"edito_id",
size:"248,20",
styleClass:"table_field",
typeid:4,
uuid:"EAD78744-4C94-4B28-9617-2EA111CD0FB5",
valuelistID:"DCCF5182-8EB5-4477-BE34-DB7564A8E0CC"
},
{
formIndex:39,
location:"5,105",
size:"57,20",
styleClass:"label_black",
text:"Editorial:",
typeid:7,
uuid:"F46A0676-8D20-4D43-A383-1B385408DB93"
},
{
formIndex:19,
labelFor:"libro_edicion",
location:"1013,135",
name:"libro_edicion_label",
size:"33,20",
styleClass:"table_label",
text:"Edic.",
typeid:7,
uuid:"FCB62F5B-F3BE-4842-B329-D10F494A9F09"
},
{
formIndex:25,
labelFor:"libro_volumen",
location:"1046,135",
name:"libro_volumen_label",
size:"30,20",
styleClass:"table_label",
text:"Vol.",
typeid:7,
uuid:"FF08F2DB-FECF-4EED-B020-271F49C1467D"
},
{
formIndex:43,
location:"381,105",
size:"57,20",
styleClass:"label_black",
text:"Título:",
typeid:7,
uuid:"FFC691CC-6E06-452F-A1B0-16A96E957A7C"
}
],
name:"biblio_frm_libros",
navigatorID:"-1",
onShowMethodID:"99FFE8A8-5E06-4F5B-8A4D-0B88CC329A1D",
showInMenu:true,
size:"1823,480",
styleClass:"table",
styleName:"id_style",
typeid:3,
uuid:"C5070AF0-941C-4511-A931-DA34631F95B4",
view:3