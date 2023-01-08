/* Just export filters from this file, they will be included to the template renderer automatically */

export {
	constructorPresentation,
	displayType,
	extractDocs,
	extractParameterDocs,
	extractSeeDocs,
	extractSelectors,
	filterByScope,
	filterByStatic,
	firstNodeWithComment,
	functionPresentation,
	getClassMethods,
	getClassProperties,
	getImplementedMethod,
	getImplementedProperty,
	getInterfaceMethods,
	getInterfaceProperties,
	getMethodChain,
	getOverriddenMethod,
	getOverriddenProperty,
	getPropertyChain,
	marked,
	methodPresentation,
	noEmpty,
	noLineBreaks,
	notEmptyAssets,
	sortByNodesName,
	typeAliasPresentation,
	variablePresentation,
} from '../helpers';
export {humanizeDeclarationName} from '@ng-doc/core';
