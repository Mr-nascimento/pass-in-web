import {Search, MoreHorizontal, ChevronRight, ChevronLeft, ChevronsLeft, ChevronsRight} from 'lucide-react'
import { IconButton } from './icon-btn';
import { Table } from './table/table';
import { TableHeader } from './table/table-header';
import { TableCell } from './table/table-cell';
import { TableRow } from './table/table-row';

export function AttendeeList(){
    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 items-center">
          <h1 className="text-2xl font-bold">Participantes</h1>
          <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
            <Search className="size-4 text-emerald-300" />
            <input
              className="bg-transparent flex-1 outline-none border-0 p-0 text-sm"
              placeholder="Buscar participantes..."
            />
          </div>
        </div>
        <Table>
          <thead>
            <TableRow>
              <TableHeader style={{ width: 48 }}>
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border-white/10 "
                />
              </TableHeader>
              <TableHeader>Código</TableHeader>
              <TableHeader >Participante</TableHeader>
              <TableHeader >Data de inscrição</TableHeader>
              <TableHeader >Data do check-in</TableHeader>
              <TableHeader style={{ width: 64 }}              
              ></TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, i) => {
              return (
                <TableRow
                  key={i}
                  className='hover:bg-white/5'
                  
                >
                  <TableCell >
                    <input
                      type="checkbox"
                      className="size-4 bg-black/20 rounded border-white/10 "
                    />
                  </TableCell>
                  <TableCell >12234</TableCell>
                  <TableCell >
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">
                        João Jr Francisco
                      </span>
                      <span>joao@gmail.com</span>
                    </div>
                  </TableCell>
                  <TableCell >7 dias atrás</TableCell>
                  <TableCell >3 dias atrás</TableCell>
                  <TableCell >
                    <IconButton className='bg-black/20'>
                      <MoreHorizontal className="size-4" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </tbody>
          <tfoot>
            <TableRow className='border-none'>
              <TableCell colSpan={3}>
                Mostrando 10 de 228 items
              </TableCell>
              <TableCell
                colSpan={3}
                className="text-right"
              >
                <div className="inline-flex items-center gap-8">
                  <span>Página 1 de 23</span>
                  <div className="flex gap-1.5">
                    <IconButton>
                      <ChevronsLeft className="size-4" />
                    </IconButton>
                    <IconButton>
                      <ChevronLeft className="size-4" />
                    </IconButton>
                    <IconButton>
                      <ChevronRight className="size-4" />
                    </IconButton>
                    <IconButton>
                      <ChevronsRight className="size-4" />
                    </IconButton>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </tfoot>
        </Table>
      </div>
    );
}