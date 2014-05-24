'use strict';

/**
 * Get contact list
 */
exports.contactList = function(req, res) {
  res.json([
    {
      name : 'Rikard Halvorsen',
      info : 'Leder',
      address: 'Blakstadlia 37, 1386 Asker',
      phone: 93450550
    }, {
      name : 'Glen Eric Bråthen',
      info : 'Nestleder',
      address: 'Åsenveien 8, 1970 Hemnes',
      phone: 48024826
    }
  ]);
};