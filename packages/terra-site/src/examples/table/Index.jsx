/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-table/docs/README.md';
import { version } from 'terra-list/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import TableSrc from '!raw-loader!terra-table/src/Table';
import SingleSelectableRowsSrc from '!raw-loader!terra-table/src/SingleSelectableRows';
import TableHeaderSrc from '!raw-loader!terra-table/src/TableHeader';
import TableHeaderContentSrc from '!raw-loader!terra-table/src/TableHeaderContent';
import TableRowSrc from '!raw-loader!terra-table/src/TableRow';
import TableRowsSrc from '!raw-loader!terra-table/src/TableRows';
import TableRowContentSrc from '!raw-loader!terra-table/src/TableRowContent';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

import NoStripedTable from './NoStripedTable';
import StripedTable from './StripedTable';
import TableWithHighlightedRows from './TableWithHighlightedRows';
import SingleRowSelectableTable from './SingleRowSelectableTable';
import TableWithNonSelectableRow from './TableWithNonSelectableRow';
import TableWithSortingIndicator from './TableWithSortingIndicator';
import TableWithMaxHeight from './TableWithMaxHeight';

const TableExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Table</h2>
    <PropsTable id="props-table" src={TableSrc} />
    <h2>Table Header</h2>
    <PropsTable id="props-tableHeader" src={TableHeaderSrc} />
    <h2>Table Header Content</h2>
    <PropsTable id="props-tableHeaderContent" src={TableHeaderContentSrc} />
    <h2>Table Rows</h2>
    <PropsTable id="props-tableRows" src={TableRowsSrc} />
    <h2>Single Selectable Table Row</h2>
    <PropsTable id="props-singleSelectableRows" src={SingleSelectableRowsSrc} />
    <h2>Table Row</h2>
    <PropsTable id="props-tableRow" src={TableRowSrc} />
    <h2>Table Row Content</h2>
    <PropsTable id="props-tableRowContent" src={TableRowContentSrc} />
    <h2>Table without zebra stripes</h2>
    <NoStripedTable />
    <h2>Table with zebra stripes</h2>
    <StripedTable />
    <h2>Table with some rows selected. Table will not select or deselect any row</h2>
    <TableWithHighlightedRows />
    <h2>Selectable table. Only one row can be selected</h2>
    <SingleRowSelectableTable />
    <h2>Selectable table with second row as non selectable</h2>
    <TableWithNonSelectableRow />
    <h2>Table with sorting indicator</h2>
    <TableWithSortingIndicator />
    <h2>Table with maximum height set on row and header</h2>
    <TableWithMaxHeight />
  </div>
);

export default TableExamples;