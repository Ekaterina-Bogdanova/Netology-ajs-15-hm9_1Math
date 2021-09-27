import Magician from '../magician';
import Daemon from '../daemon';

test('magician 0/2/true', () => {
  const merlin = new Magician('Merlin');
  merlin.distance = 2;
  merlin.stoned = true;
  merlin.attack = 0;
  expect(merlin.attack).toBe(0);
});

test('magician 100/1/false', () => {
  const merlin = new Magician('Merlin');
  merlin.distance = 1;
  merlin.stoned = false;
  merlin.attack = 100;
  expect(merlin.attack).toBe(100);
});

test('daemon - attack 50/7/true', () => {
  const velzevul = new Daemon('Velzevul');
  velzevul.distance = 7;
  velzevul.stoned = true;
  velzevul.attack = 50;
  expect(velzevul.attack).toBe(6);
});

test('magician 100/11/false', () => {
  const merlin = new Magician('Merlin');
  merlin.distance = 11;
  merlin.stoned = false;
  merlin.attack = 100;
  expect(merlin.attack).toBe(0);
});

test('magician 100/11/true', () => {
  const merlin = new Magician('Merlin');
  merlin.distance = 11;
  merlin.stoned = true;
  merlin.attack = 100;
  expect(merlin.attack).toBe(0);
});

test('daemon - attack 10/9/true', () => {
  const velzevul = new Daemon('Velzevul');
  velzevul.distance = 9;
  velzevul.stoned = true;
  velzevul.attack = 10;
  expect(velzevul.attack).toBe(0);
});

test('daemon - attack 5/2/true', () => {
  const velzevul = new Daemon('Velzevul');
  velzevul.distance = 2;
  velzevul.stoned = true;
  velzevul.attack = 5;
  expect(velzevul.attack).toBe(0);
});

test('daemon - attack 5/12/true', () => {
  const velzevul = new Daemon('Velzevul');
  velzevul.distance = 12;
  velzevul.stoned = true;
  velzevul.attack = 5;
  expect(velzevul.attack).toBe(0);
});
