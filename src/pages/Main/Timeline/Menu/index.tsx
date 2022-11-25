/* eslint-disable no-constant-condition */
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { filtroDeEventos } from '../../../../state/hooks/atom';
import styles from './Menu.module.scss';
import opcoes from './opcoes.json';

export default function Menu() {
  const [aberto, setAberto] = useState(false);
  const [ordenador, setOrdenador] = useState('');

  const setFiltro = useSetRecoilState(filtroDeEventos);

  return (
    <button
      className={styles.ordenador}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
      style={{ paddingTop: aberto === true ? '11px' : '' }}
    >
      <span className={styles.span}>
        {ordenador === '' || 'ㅤㅤㅤ' ? 'Ordenar por' : ordenador}
      </span>
      <div className={aberto === true ? styles.ordenador__options__ativo : styles.ordenador__options} >
        {opcoes.map(opcao => (
          <div className={styles.ordenador__option} key={opcao.value} onClick={() => {
            setOrdenador(opcao.nome);
            setFiltro(opcao.value);
          }}>
            {opcao.nome}
          </div>
        ))}
      </div>
    </button >
  );
}