import React from 'react';

export function getImageTag(dataItem) {
	return <img src={dataItem.image} alt={"Structure representative of " + dataItem.short_name} />
}