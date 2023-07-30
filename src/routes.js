import { addNoteHandler, getAllNotesHandler, getNoteByIdHandler } from './handler';

const routes = [{
  method: 'POST',
  path: '/notes',
  // eslint-disable-next-line no-unused-vars
  handler: addNoteHandler,
},
{
  method: 'GET',
  path: '/notes',
  handler: getAllNotesHandler,
},
{
  method: 'GET',
  path: '/notes/{id}',
  handler: () => {},
},
{
  method: 'GET',
  path: '/notes/{id}',
  handler: getNoteByIdHandler,
},
];

export default routes;
