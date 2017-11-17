import browser from './browser'

/*const blankHTML = env.isMSIE && env.browserVersion < 11 ? '&nbsp;' : '<br>';*/
const blankHTML = browser.ie && browser.version < 11 ? '&nbsp;' : '<br>';

function isText(node) {
    return node && node.nodeType === 3;
}

function isElement(node) {
    return node && node.nodeType === 1;
}

function isNodeNameBase(nodeName) {
    nodeName = nodeName.toUpperCase();
    return function(node) {
        return node && node.nodeName.toUpperCase() === nodeName;
    }
}

const isBody        = isNodeNameBase("BODY");
const isBlockquote  = isNodeNameBase("BLOCKQUOTE");
const isTable       = isNodeNameBase("TABLE");
const isAnchor      = isNodeNameBase("A");
const isBr          = isNodeNameBase("BR");
const isImg         = isNodeNameBase("IMG");
const isSpan        = isNodeNameBase("SPAN");

function isList(node) {
    return node && /^UL|^OL/.test(node.nodeName.toUpperCase());
}

function isTableCell(node) {
    return node && /^TD|^TH/.test(node.nodeName.toUpperCase());
}

function findParent(node, filter, stopNode) {
    if (!node) return null;
    if (!filter || (typeof filter != 'function')) return null;

    while (node) {
        if (filter(node)) return node;
        if (stopNode && node === stopNode) return null;
        if (isBody(node)) return null;
        node = node.parentNode;
    }

    return null;
}

function findParentBase(is) {
    return function(node, stopNode) {
        return findParent(node, function(n) {
            return is(n);
        }, stopNode);
    };
}

const findParentBlockquote  = findParentBase(isBlockquote);
const findParentTable       = findParentBase(isTable);
const findParentTableCell   = findParentBase(isTableCell);
const findParentList        = findParentBase(isList);
const findParentImg         = findParentBase(isImg);
const findParentSpan        = findParentBase(isSpan);
const findParentAnchor      = findParentBase(isAnchor);

function findNode(nodes, filter) {
    if (!nodes) return null;

    let len = nodes.length;
    for (let i = 0; i < len; i++) {
        if (filter(nodes[i])) {
            return nodes[i]
        }
    }

    return null
}

function create(nodeName) {
    return document.createElement(nodeName);
}

function createText(text) {
    return document.createTextNode(text);
}

export default {
    blank: blankHTML,
    isText,
    isElement,
    isBody,
    isBlockquote,
    isTable,
    isTableCell,
    isList,
    isAnchor,
    isImg,
    findParent,
    findParentBlockquote,
    findParentTable,
    findParentTableCell,
    findParentImg,
    findParentList,
    findParentSpan,
    findParentAnchor,
    findNode,
    create,
    createText,
}
