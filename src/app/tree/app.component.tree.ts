import { Component } from '@angular/core';

// usage:
@Component({
  selector: 'app-tree',
  templateUrl: 'app.component.tree.html',
  styleUrls: ['app.component.tree.css']
})

export class AppTreeComponent {
  options = {
    useVirtualScroll: true,
    nodeHeight: 20,
    dropSlotHeight: 20
  };
  nodes = [
    {
      name: 'Баксан строй (68)', children: [
        {
          name: 'Some text'
        }
      ]
    },
    {
      name: 'Макростройинвест (56)', children: [
        {
          name: 'Some text'
        }
      ]
    },
    {
      name: 'Добровскийдон (3)',
      children: [
        { name: 'Трактора (760)' },
        { name: 'Легковые (115)', children: [
            {
              name: 'МТЗ - 23 - 2338 Т3 77'
            },
            {
              name: 'ВТЗ - 150 - 2398 УО 43'
            },
            {
              name: 'МТЗ - 6783 ВХ 77', place: 'stop'
            },
            {
              name: 'ХТБ - 23 - 2345 ТЗ 77'
            }
          ] }
      ]
    },
    {
      name: 'Баксан строй (68)', children: [
        {
          name: 'Some text'
        }
      ]
    },
    {
      name: 'Макростройинвест (56)', children: [
        {
          name: 'Some text'
        }
      ]
    },
    {
      name: 'Горпромышленность (760)', people: true, children: [
        {
          name: 'Some text'
        }
      ]
    },
    {
      name: 'Черный кв (115)', people: true, children: [
        {
          name: 'Some text'
        }
      ]
    },
    {
      name: 'Добровскийдон (3)', children: [
        {
          name: 'ГВЫ - 23 - 2754 Ф3 24'
        },
        {
          name: 'МТЗ - 21 - 6857 ТЗ 3452'
        },
        {
          name: 'МТЗ - 22 - 3457 ТЗ 567', place: 'stop'
        },
        {
          name: 'МТЗ - 28 65477 ТЗ 3456'
        },
        {
          name: 'РАТ - 78 - 22456 ТЗ 14', place: 'stop'
        },
        {
          name: 'РТЛ - 22 - 435 ТЗ 77', place: 'stop'
        },
        {
          name: 'МТЗ - 22 - 23452345 ТЗ 77'
        },
        {
          name: 'МТЗ - 22 - 2345 ТЗ 234'
        },
        {
          name: 'ХВА - 54 - 7654 ТЗ 11'
        },
        {
          name: 'ХВТ - 63 - 2568 ТЗ 224'
        }
      ]
    }
  ];
}
