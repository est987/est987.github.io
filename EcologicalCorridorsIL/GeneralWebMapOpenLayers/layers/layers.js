ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2039").setExtent([3495.285717, 362361.696207, 673086.180659, 811871.319842]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2039'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> מסדרונות אקולוגיים (רט"ג)'
            });
var format_1_2 = new ol.format.GeoJSON();
var features_1_2 = format_1_2.readFeatures(json_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2039'});
var jsonSource_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_2.addFeatures(features_1_2);
var lyr_1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_2, 
                style: style_1_2,
                interactive: true,
    title: 'יער (תמא 1)<br />\
    <img src="styles/legend/1_2_0.png" /> יער טבעי<br />\
    <img src="styles/legend/1_2_1.png" /> יער פארק<br />\
    <img src="styles/legend/1_2_2.png" /> יער נטע אדם<br />'
        });
var format_1_3 = new ol.format.GeoJSON();
var features_1_3 = format_1_3.readFeatures(json_1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2039'});
var jsonSource_1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_3.addFeatures(features_1_3);
var lyr_1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_3, 
                style: style_1_3,
                interactive: true,
    title: 'שמורה וגן (תמא 1)<br />\
    <img src="styles/legend/1_3_0.png" /> שמורת טבע<br />\
    <img src="styles/legend/1_3_1.png" /> גן לאומי<br />'
        });
var format_1_4 = new ol.format.GeoJSON();
var features_1_4 = format_1_4.readFeatures(json_1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2039'});
var jsonSource_1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_4.addFeatures(features_1_4);
var lyr_1_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_4, 
                style: style_1_4,
                interactive: true,
    title: 'נחל (תמא 1)<br />\
    <img src="styles/legend/1_4_0.png" /> משני<br />\
    <img src="styles/legend/1_4_1.png" /> ראשי<br />'
        });
var format__351_5 = new ol.format.GeoJSON();
var features__351_5 = format__351_5.readFeatures(json__351_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2039'});
var jsonSource__351_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__351_5.addFeatures(features__351_5);
var lyr__351_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__351_5, 
                style: style__351_5,
                interactive: true,
                title: '<img src="styles/legend/_351_5.png" /> מסדרון_אקולוגי (תמא 35/ 1)'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr__1.setVisible(true);lyr_1_2.setVisible(true);lyr_1_3.setVisible(true);lyr_1_4.setVisible(true);lyr__351_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr__1,lyr_1_2,lyr_1_3,lyr_1_4,lyr__351_5];
lyr__1.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'function_': 'תפקיד', 'corr_name': 'שם', 'region': 'אזור', 'Shape_Leng': 'Shape_Leng', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_1_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'MAVAT_NAME': 'סוג', 'SCENARIO': 'SCENARIO', 'DATA_DATE': 'DATA_DATE', 'MAVAT_CODE': 'MAVAT_CODE', 'STATUS': 'STATUS', 'PL_NAME': 'PL_NAME', 'PL_NUMBER': 'PL_NUMBER', 'LAST_UPDATE': 'LAST_UPDATE', 'stage': 'stage', 'type_name': 'type_name', 'PL_change': 'PL_change', 'PL_URL': 'PL_URL', 'REMARKS': 'REMARKS', 'Layer_Name': 'Layer_Name', 'scale': 'scale', 'LAYER_ID': 'LAYER_ID', 'GROUP_ID': 'GROUP_ID', 'DEFQ': 'DEFQ', 'PLAN_NAME': 'PLAN_NAME', 'NAME': 'שם', 'LABEL': 'LABEL', 'NUM': 'NUM', 'LEGAL_AREA': 'LEGAL_AREA', 'AGAM_ID': 'AGAM_ID', 'SOURCE_CODE': 'SOURCE_CODE', 'VER_ID': 'VER_ID', 'PL_ID': 'PL_ID', 'MP_ID': 'MP_ID', 'STATION': 'STATION', 'STATION_DESC': 'STATION_DESC', 'PL_ORDER_PRINT_VERSION': 'PL_ORDER_PRINT_VERSION', 'PL_TASRIT_PRN_VERSION': 'PL_TASRIT_PRN_VERSION', 'AREA': 'AREA', 'LEN': 'LEN', 'TYPE_CODE': 'TYPE_CODE', 'place_no': 'place_no', 'ORIG_FID': 'ORIG_FID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_1_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'MAVAT_NAME': 'סוג', 'NAME': 'שם', 'NUM': 'NUM', 'LAYER_ID': 'LAYER_ID', 'GROUP_ID': 'GROUP_ID', 'SCENARIO': 'SCENARIO', 'DEFQ': 'DEFQ', 'PLAN_NAME': 'PLAN_NAME', 'DATA_DATE': 'DATA_DATE', 'MAVAT_CODE': 'MAVAT_CODE', 'LABEL': 'LABEL', 'LEGAL_AREA': 'LEGAL_AREA', 'AGAM_ID': 'AGAM_ID', 'STATUS': 'STATUS', 'SOURCE_CODE': 'SOURCE_CODE', 'VER_ID': 'VER_ID', 'PL_ID': 'PL_ID', 'MP_ID': 'MP_ID', 'PL_NAME': 'PL_NAME', 'PL_NUMBER': 'PL_NUMBER', 'STATION': 'STATION', 'STATION_DESC': 'STATION_DESC', 'LAST_UPDATE': 'LAST_UPDATE', 'PL_ORDER_PRINT_VERSION': 'PL_ORDER_PRINT_VERSION', 'PL_TASRIT_PRN_VERSION': 'PL_TASRIT_PRN_VERSION', 'AREA': 'AREA', 'LEN': 'LEN', 'TYPE_CODE': 'TYPE_CODE', 'stage': 'stage', 'type_name': 'type_name', 'PL_change': 'PL_change', 'PL_URL': 'PL_URL', 'place_no': 'place_no', 'REMARKS': 'REMARKS', 'area_1': 'area_1', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'area_12': 'area_12', 'area_d': 'area_d', 'scale': 'scale', 'Layer_Name': 'Layer_Name', 'Buffer': 'Buffer', });
lyr_1_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'MAVAT_NAME': 'סוג', 'ET_ID': 'ET_ID', 'LAYER_ID': 'LAYER_ID', 'GROUP_ID': 'GROUP_ID', 'SCENARIO': 'SCENARIO', 'DEFQ': 'DEFQ', 'PLAN_NAME': 'PLAN_NAME', 'DATA_DATE': 'DATA_DATE', 'MAVAT_CODE': 'MAVAT_CODE', 'NAME': 'שם', 'LABEL': 'LABEL', 'NUM': 'NUM', 'LEGAL_AREA': 'LEGAL_AREA', 'AGAM_ID': 'AGAM_ID', 'STATUS': 'STATUS', 'SOURCE_CODE': 'SOURCE_CODE', 'VER_ID': 'VER_ID', 'PL_ID': 'PL_ID', 'MP_ID': 'MP_ID', 'PL_NAME': 'PL_NAME', 'PL_NUMBER': 'PL_NUMBER', 'STATION': 'STATION', 'STATION_DESC': 'STATION_DESC', 'LAST_UPDATE': 'LAST_UPDATE', 'PL_ORDER_PRINT_VERSION': 'PL_ORDER_PRINT_VERSION', 'PL_TASRIT_PRN_VERSION': 'PL_TASRIT_PRN_VERSION', 'AREA': 'AREA', 'LEN': 'LEN', 'TYPE_CODE': 'TYPE_CODE', 'stage': 'stage', 'type_name': 'type_name', 'PL_change': 'PL_change', 'PL_URL': 'PL_URL', 'place_no': 'place_no', 'REMARKS': 'REMARKS', 'Shape_Length': 'Shape_Length', 'Layer_Name': 'Layer_Name', });
lyr__351_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', });
lyr__1.set('fieldImages', {'fid': 'Hidden', 'OBJECTID_1': 'Hidden', 'OBJECTID': 'Hidden', 'function_': 'TextEdit', 'corr_name': 'TextEdit', 'region': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape__Area': 'Hidden', 'Shape__Length': 'Hidden', });
lyr_1_2.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'MAVAT_NAME': 'TextEdit', 'SCENARIO': 'Hidden', 'DATA_DATE': 'Hidden', 'MAVAT_CODE': 'Hidden', 'STATUS': 'Hidden', 'PL_NAME': 'Hidden', 'PL_NUMBER': 'Hidden', 'LAST_UPDATE': 'Hidden', 'stage': 'Hidden', 'type_name': 'Hidden', 'PL_change': 'Hidden', 'PL_URL': 'Hidden', 'REMARKS': 'Hidden', 'Layer_Name': 'Hidden', 'scale': 'Hidden', 'LAYER_ID': 'Hidden', 'GROUP_ID': 'Hidden', 'DEFQ': 'Hidden', 'PLAN_NAME': 'Hidden', 'NAME': 'TextEdit', 'LABEL': 'Hidden', 'NUM': 'Hidden', 'LEGAL_AREA': 'Hidden', 'AGAM_ID': 'Hidden', 'SOURCE_CODE': 'Hidden', 'VER_ID': 'Hidden', 'PL_ID': 'Hidden', 'MP_ID': 'Hidden', 'STATION': 'Hidden', 'STATION_DESC': 'Hidden', 'PL_ORDER_PRINT_VERSION': 'Hidden', 'PL_TASRIT_PRN_VERSION': 'Hidden', 'AREA': 'Hidden', 'LEN': 'Hidden', 'TYPE_CODE': 'Hidden', 'place_no': 'Hidden', 'ORIG_FID': 'Hidden', 'Shape_Length': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_1_3.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'MAVAT_NAME': 'TextEdit', 'NAME': 'TextEdit', 'NUM': 'Hidden', 'LAYER_ID': 'Hidden', 'GROUP_ID': 'Hidden', 'SCENARIO': 'Hidden', 'DEFQ': 'Hidden', 'PLAN_NAME': 'Hidden', 'DATA_DATE': 'Hidden', 'MAVAT_CODE': 'Hidden', 'LABEL': 'Hidden', 'LEGAL_AREA': 'Hidden', 'AGAM_ID': 'Hidden', 'STATUS': 'Hidden', 'SOURCE_CODE': 'Hidden', 'VER_ID': 'Hidden', 'PL_ID': 'Hidden', 'MP_ID': 'Hidden', 'PL_NAME': 'Hidden', 'PL_NUMBER': 'Hidden', 'STATION': 'Hidden', 'STATION_DESC': 'Hidden', 'LAST_UPDATE': 'Hidden', 'PL_ORDER_PRINT_VERSION': 'Hidden', 'PL_TASRIT_PRN_VERSION': 'Hidden', 'AREA': 'Hidden', 'LEN': 'Hidden', 'TYPE_CODE': 'Hidden', 'stage': 'Hidden', 'type_name': 'Hidden', 'PL_change': 'Hidden', 'PL_URL': 'Hidden', 'place_no': 'Hidden', 'REMARKS': 'Hidden', 'area_1': 'Hidden', 'Shape_Length': 'Hidden', 'Shape_Area': 'Hidden', 'area_12': 'Hidden', 'area_d': 'Hidden', 'scale': 'Hidden', 'Layer_Name': 'Hidden', 'Buffer': 'Hidden', });
lyr_1_4.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'MAVAT_NAME': 'TextEdit', 'ET_ID': 'Hidden', 'LAYER_ID': 'Hidden', 'GROUP_ID': 'Hidden', 'SCENARIO': 'Hidden', 'DEFQ': 'Hidden', 'PLAN_NAME': 'Hidden', 'DATA_DATE': 'Hidden', 'MAVAT_CODE': 'Hidden', 'NAME': 'TextEdit', 'LABEL': 'Hidden', 'NUM': 'Hidden', 'LEGAL_AREA': 'Hidden', 'AGAM_ID': 'Hidden', 'STATUS': 'Hidden', 'SOURCE_CODE': 'Hidden', 'VER_ID': 'Hidden', 'PL_ID': 'Hidden', 'MP_ID': 'Hidden', 'PL_NAME': 'Hidden', 'PL_NUMBER': 'Hidden', 'STATION': 'Hidden', 'STATION_DESC': 'Hidden', 'LAST_UPDATE': 'Hidden', 'PL_ORDER_PRINT_VERSION': 'Hidden', 'PL_TASRIT_PRN_VERSION': 'Hidden', 'AREA': 'Hidden', 'LEN': 'Hidden', 'TYPE_CODE': 'Hidden', 'stage': 'Hidden', 'type_name': 'Hidden', 'PL_change': 'Hidden', 'PL_URL': 'Hidden', 'place_no': 'Hidden', 'REMARKS': 'Hidden', 'Shape_Length': 'Hidden', 'Layer_Name': 'Hidden', });
lyr__351_5.set('fieldImages', {'OBJECTID': 'Hidden', 'Shape_Length': 'Hidden', });
lyr__1.set('fieldLabels', {'function_': 'inline label', 'corr_name': 'inline label', 'region': 'inline label', });
lyr_1_2.set('fieldLabels', {'MAVAT_NAME': 'inline label', 'NAME': 'inline label', });
lyr_1_3.set('fieldLabels', {'MAVAT_NAME': 'inline label', 'NAME': 'inline label', });
lyr_1_4.set('fieldLabels', {'MAVAT_NAME': 'inline label', 'NAME': 'inline label', });
lyr__351_5.set('fieldLabels', {});
lyr__351_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});