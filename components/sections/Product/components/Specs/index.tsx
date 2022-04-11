import { IGpuSpects } from 'interfaces';
import { Caption, Table, TBody, Td, Th, Tr } from './styles';

interface Props {
  specs: IGpuSpects
}

export const Specs = ({ specs }: Props) => {
  return (
    <>
      <Table>
        <Caption>General</Caption>
        <TBody>
          <Tr>
            <Th>Brand</Th>
            <Td>{specs.brand}</Td>
          </Tr>
          <Tr>
            <Th>Series</Th>
            <Td>{specs.series}</Td>
          </Tr>
          <Tr>
            <Th>Model</Th>
            <Td>{specs.model}</Td>
          </Tr>
        </TBody>
      </Table>

      <Table>
        <Caption>Interface</Caption>
        <TBody>
          <Tr>
            <Th>Interface</Th>
            <Td>{specs.interface}</Td>
          </Tr>
        </TBody>
      </Table>

      <Table>
        <Caption>Chipset</Caption>
        <TBody>
          <Tr>
            <Th>Manufacturer</Th>
            <Td>{specs.chipset_manufactor}</Td>
          </Tr>
          <Tr>
            <Th>GPU Series</Th>
            <Td>{specs.series}</Td>
          </Tr>
          <Tr>
            <Th>GPU</Th>
            <Td>{specs.gpu}</Td>
          </Tr>
          <Tr>
            <Th>GPU</Th>
            <Td>{specs.cuda_cores}</Td>
          </Tr>
        </TBody>
      </Table>

      <Table>
        <Caption>Memory</Caption>
        <TBody>
          <Tr>
            <Th>Effective Memory Clock</Th>
            <Td>{specs.effective_memory_clock}</Td>
          </Tr>
          <Tr>
            <Th>Memory Size</Th>
            <Td>{specs.memory_size}</Td>
          </Tr>
          <Tr>
            <Th>Memory Interface</Th>
            <Td>{specs.memory_interface}</Td>
          </Tr>
          <Tr>
            <Th>Memory Type</Th>
            <Td>{specs.memory_type}</Td>
          </Tr>
        </TBody>
      </Table>

      <Table>
        <Caption>Ports</Caption>
        <TBody>
          <Tr>
            <Th>Multi-Monitor Support</Th>
            <Td>{specs.multi_monitor_support}</Td>
          </Tr>
          <Tr>
            <Th>HDMI</Th>
            <Td>{specs.hdmi}</Td>
          </Tr>
          <Tr>
            <Th>Display Port</Th>
            <Td>{specs.display_port}</Td>
          </Tr>
        </TBody>
      </Table>

      <Table>
        <Caption>Details</Caption>
        <TBody>
          <Tr>
            <Th>Max Resolutino</Th>
            <Td>{specs.max_resolution}</Td>
          </Tr>
          <Tr>
            <Th>Cooler</Th>
            <Td>{specs.cooler}</Td>
          </Tr>
          <Tr>
            <Th>Thermal Design Power</Th>
            <Td>{specs.thermal_design_power}</Td>
          </Tr>
        </TBody>
      </Table>

      <Table>
        <Caption>Form Factor & Dimensions</Caption>
        <TBody>
          <Tr>
            <Th>Max GPU Length</Th>
            <Td>{specs.max_length}</Td>
          </Tr>
          <Tr>
            <Th>Card Dimensions (L x H)</Th>
            <Td>{specs.dimentions}</Td>
          </Tr>
          <Tr>
            <Th>Display Port</Th>
            <Td>{specs.display_port}</Td>
          </Tr>
        </TBody>
      </Table>
    </>
  );
};
